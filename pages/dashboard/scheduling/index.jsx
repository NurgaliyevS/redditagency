import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import withAuth from "@/components/withAuth";
import FormattingToolbar from "@/components/scheduling/FormattingToolbar";
import SubredditSelector from "@/components/scheduling/SubredditSelector";
import { format, parse, setHours, setMinutes, add, sub } from "date-fns";
import Post from "@/components/ui/Post";
import { toast } from "react-toastify";
import { showNotification } from "@/components/cross-posting/ToastNotifications";
import { useRouter } from "next/router";
import { useSidebar } from "@/context/SidebarContext";
import Tips from "@/components/scheduling/Tips";
import { validateImageFile } from "@/utils/cloudflareUpload";

function Scheduling() {
  const { data: session, status } = useSession();
  const [subreddits, setSubreddits] = useState([]);
  const [subredditsLoading, setSubredditsLoading] = useState(false);
  const [subredditsError, setSubredditsError] = useState(null);
  const [formData, setFormData] = useState({
    community: "",
    title: "",
    text: "",
    selectedDate: format(new Date(), "yyyy-MM-dd"),
    selectedTime: format(new Date(), "HH:mm"),
    type: "image",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    flairId: "",
    flairText: "",
    imageFile: null,
    imagePreview: null,
  });
  const [userTimezone, setUserTimezone] = useState("");
  const [initialized, setInitialized] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [flairs, setFlairs] = useState([]);
  const [flairsLoading, setFlairsLoading] = useState(false);
  const [flairsError, setFlairsError] = useState(null);
  const [flairCache, setFlairCache] = useState({});
  const [flairRequiredError, setFlairRequiredError] = useState("");
  const [imageError, setImageError] = useState("");
  const router = useRouter();
  const { refreshData } = useSidebar();

  if (status !== "loading" && !initialized) {
    setInitialized(true);

    // Get user's timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setUserTimezone(timezone);

    // Only fetch subreddits if we have a session
    if (session && subreddits.length === 0 && !subredditsLoading) {
      fetchUserSubreddits();
    }
  }

  async function fetchUserSubreddits() {
    try {
      setSubredditsLoading(true);
      setSubredditsError(null);

      const response = await fetch("/api/reddit/subreddits");

      if (!response.ok) {
        throw new Error(`Failed to fetch subreddits: ${response.status}`);
      }

      const data = await response.json();
      setSubreddits(data.subreddits || []);
    } catch (error) {
      console.error("Error fetching subreddits:", error);
      setSubredditsError(error.message);
    } finally {
      setSubredditsLoading(false);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Fetch flairs when subreddit changes
    if (name === "community" && value) {
      fetchSubredditFlairs(value);
      setFlairRequiredError("");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate image file
    const validation = validateImageFile(file);
    if (!validation.valid) {
      setImageError(validation.error);
      return;
    }

    setImageError("");

    // Create preview URL
    const previewUrl = URL.createObjectURL(file);

    setFormData((prev) => ({
      ...prev,
      imageFile: file,
      imagePreview: previewUrl,
      type: "image", // Automatically set type to image when image is selected
    }));
  };

  const removeImage = () => {
    if (formData.imagePreview) {
      URL.revokeObjectURL(formData.imagePreview);
    }

    setFormData((prev) => ({
      ...prev,
      imageFile: null,
      imagePreview: null,
      type: "text", // Reset to text type when image is removed
    }));
    setImageError("");
  };

  const fetchSubredditFlairs = async (subreddit) => {
    // Check cache first
    if (flairCache[subreddit]) {
      setFlairs(flairCache[subreddit]);
      return;
    }
    try {
      setFlairsLoading(true);
      setFlairsError(null);
      const response = await fetch(`/api/reddit/flairs?subreddit=${subreddit}`);
      const data = await response.json();

      if (!response.ok) {
        // If the API returns a 403 or any error, set the error message
        setFlairsError(data?.error || "Error fetching flairs");
        setFlairs([]);
        return;
      }

      const flairs = data.choices || [];
      setFlairs(flairs);
      setFlairCache((prev) => ({ ...prev, [subreddit]: flairs }));
    } catch (error) {
      setFlairsError(error?.message || "Error fetching flairs");
      setFlairs([]);
    } finally {
      setFlairsLoading(false);
    }
  };

  const handleFlairChange = (selectedFlair) => {
    setFlairRequiredError("");
    setFormData((prev) => ({
      ...prev,
      flairId: selectedFlair?.id || "",
      flairText: selectedFlair?.text || "",
    }));
  };

  const handleFormatting = (formatType) => {
    const textarea = document.querySelector("textarea");
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formData.text.substring(start, end);

    let formattedText = "";
    let newCursorPosition = end;

    if (formatType === "bold") {
      formattedText =
        formData.text.substring(0, start) +
        `**${selectedText}**` +
        formData.text.substring(end);
      newCursorPosition = selectedText.length ? end + 4 : start + 2;
    } else if (formatType === "italic") {
      formattedText =
        formData.text.substring(0, start) +
        `*${selectedText}*` +
        formData.text.substring(end);
      newCursorPosition = selectedText.length ? end + 2 : start + 1;
    } else if (formatType === "link") {
      if (selectedText) {
        formattedText =
          formData.text.substring(0, start) +
          `[${selectedText}](url)` +
          formData.text.substring(end);
        newCursorPosition = start + selectedText.length + 2;
      } else {
        formattedText =
          formData.text.substring(0, start) +
          "[Link text](url)" +
          formData.text.substring(end);
        newCursorPosition = start + 1;
      }
    }

    setFormData((prev) => ({
      ...prev,
      text: formattedText,
    }));
  };

  const handleDateTimeChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkPostAvailability = async () => {
    const accessResponse = await fetch("/api/user/check-access");
    if (!accessResponse.ok) {
      throw new Error("Failed to check post availability");
    }
    const accessData = await accessResponse.json();

    if (accessData.post_available <= 0) {
      router.push("/#pricing");
      throw new Error("No posts available. \nPlease upgrade your plan.");
    }

    return true;
  };

  const updatePostAvailability = async () => {
    try {
      await fetch("/api/user/update-post-available", {
        method: "POST",
      });
      refreshData();
    } catch (updateError) {
      console.error("Error updating post availability:", updateError);
    }
  };

  const schedulePost = async () => {
    if (
      !formData.community ||
      !formData.title ||
      !formData.selectedDate ||
      !formData.selectedTime ||
      (formData.type === "text" && !formData.text) ||
      (formData.type === "image" && !formData.imageFile)
    ) {
      showNotification(
        "error",
        {
          successful: [],
          failed: [
            { subreddit: "All", reason: "Please fill in all required fields" },
          ],
          total: 1,
        },
        toast
      );
      return;
    }

    // Require flair if more than two flairs or equal to 2 and no flair is selected
    if (flairs?.length >= 2 && !formData.flairId) {
      setFlairRequiredError("Please select a flair for this subreddit.");
      return;
    } else {
      setFlairRequiredError("");
    }

    setIsLoadingForm(true);
    try {
      await checkPostAvailability();

      const scheduledDate = parse(
        formData.selectedDate,
        "yyyy-MM-dd",
        new Date()
      );
      const [hours, minutes] = formData.selectedTime.split(":");
      let scheduledDateTime = setHours(scheduledDate, parseInt(hours, 10));
      scheduledDateTime = setMinutes(scheduledDateTime, parseInt(minutes, 10));
      const scheduledDateTimeISO = format(
        scheduledDateTime,
        "yyyy-MM-dd'T'HH:mm:ssxxx"
      );
      const currentTimeISO = format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxx");

      // Create FormData for file upload
      const postData = new FormData();
      postData.append("community", formData.community);
      postData.append("title", formData.title);
      
      // Only add text if it's a text post or if there's actual text content
      if (formData.type === "text" || (formData.type === "image" && formData.text.trim())) {
        postData.append("text", formData.text.replace(/\n/g, "\n\n"));
      }
      
      postData.append("scheduledDateTime", scheduledDateTimeISO);
      postData.append("timeZone", userTimezone);
      postData.append("currentClientTime", currentTimeISO);
      postData.append("type", formData.type);
      postData.append("flairId", formData.flairId);
      postData.append("flairText", formData.flairText);

      // Add image file if present
      if (formData.imageFile) {
        postData.append("image", formData.imageFile);
        console.log("Adding image to FormData:", formData.imageFile.name, formData.imageFile.size);
      }

      // Debug: Log what's being sent
      console.log("=== FRONTEND DEBUG ===");
      console.log("FormData entries:");
      for (let [key, value] of postData.entries()) {
        if (value instanceof File) {
          console.log(`${key}:`, value.name, value.size, value.type);
        } else {
          console.log(`${key}:`, value);
        }
      }
      console.log("=====================");

      const response = await fetch("/api/post/schedule-post", {
        method: "POST",
        body: postData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData?.error || errorData?.message || "Failed to schedule post"
        );
      }

      setFormData({
        community: "",
        title: "",
        text: "",
        selectedDate: format(new Date(), "yyyy-MM-dd"),
        selectedTime: format(new Date(), "HH:mm"),
        type: "text",
        flairId: "",
        flairText: "",
        imageFile: null,
        imagePreview: null,
      });

      setFlairs([]);

      const data = await response.json();
      showNotification(
        "success",
        {
          successful: [{ subreddit: formData.community }],
          failed: [],
          total: 1,
        },
        toast
      );

      setRefreshTrigger((prev) => prev + 1);
      updatePostAvailability();
    } catch (error) {
      console.error("Error scheduling post:", error);
      showNotification(
        "error",
        {
          successful: [],
          failed: [
            {
              subreddit: formData.community,
              reason:
                error.message || "Error scheduling post. Please try again.",
            },
          ],
          total: 1,
        },
        toast
      );
    } finally {
      setIsLoadingForm(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-10 min-h-screen">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Schedule Reddit Posts
          </h1>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm self-start w-full md:w-3/4 mb-4 md:mb-0">
              <SubredditSelector
                subreddits={subreddits}
                subredditsLoading={subredditsLoading}
                subredditsError={subredditsError}
                selectedCommunity={formData.community}
                onCommunityChange={handleInputChange}
                onRetry={fetchUserSubreddits}
              />

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />

                {/* Image Upload Section */}
                <div className="space-y-3">
                  <label className="label">
                    <span className="label-text font-medium">
                      Image (Optional)
                    </span>
                    <span className="label-text-alt text-gray-500">
                      Max 20MB
                    </span>
                  </label>

                  <div className="flex items-center gap-3">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="file-input file-input-bordered w-full max-w-xs"
                    />
                    {formData.imageFile && (
                      <button
                        type="button"
                        onClick={removeImage}
                        className="btn btn-sm btn-outline btn-error"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  {imageError && (
                    <div className="text-error text-sm font-medium">
                      {imageError}
                    </div>
                  )}

                  {formData.imagePreview && (
                    <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Image Preview
                        </span>
                        <span className="text-xs text-gray-500">
                          {(formData.imageFile.size / 1024 / 1024).toFixed(2)}{" "}
                          MB
                        </span>
                      </div>
                      <img
                        src={formData.imagePreview}
                        alt="Preview"
                        className="max-w-full h-auto max-h-48 rounded border"
                      />
                    </div>
                  )}
                </div>

                <FormattingToolbar
                  onFormat={handleFormatting}
                  formData={formData}
                  handleFlairChange={handleFlairChange}
                  flairs={flairs}
                  error={flairsError}
                  loading={flairsLoading}
                />

                {flairRequiredError && (
                  <div className="text-error text-sm font-medium mb-2">
                    {flairRequiredError}
                  </div>
                )}

                <textarea
                  className="textarea textarea-bordered w-full min-h-32"
                  placeholder="Text"
                  name="text"
                  value={formData.text}
                  onChange={(e) => {
                    // Reset height to auto
                    e.target.style.height = "auto";

                    // Set height based on scroll height
                    e.target.style.height = `${e.target.scrollHeight}px`;

                    handleInputChange(e);
                  }}
                ></textarea>
                {/* Show message for image posts */}
                {formData.type === "image" && (
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Image Post:</strong> Text content is optional for
                      image posts. The image will be the main content of your
                      Reddit post.
                    </p>
                  </div>
                )}

                <div className="flex gap-4 mt-4">
                  <input
                    type="date"
                    name="selectedDate"
                    value={formData.selectedDate}
                    onChange={handleDateTimeChange}
                    min={format(new Date(), "yyyy-MM-dd")}
                    className="input input-bordered"
                  />

                  <input
                    type="time"
                    name="selectedTime"
                    value={formData.selectedTime}
                    onChange={handleDateTimeChange}
                    className="input input-bordered"
                    format="HH:mm"
                  />
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    className="btn btn-primary"
                    disabled={
                      !formData.selectedDate ||
                      !formData.selectedTime ||
                      !formData.title ||
                      !formData.community ||
                      isLoadingForm
                    }
                    onClick={schedulePost}
                  >
                    {isLoadingForm ? "Scheduling..." : "Schedule Post"}
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <Tips subreddit={formData.community} />
            </div>
          </div>
        </div>
        <Post refreshTrigger={refreshTrigger} />
      </div>
    </DashboardLayout>
  );
}

export default withAuth(Scheduling);
