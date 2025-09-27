import mongoose from 'mongoose';
import { generateSlugFromKeyword, normalizeSlug } from '../lib/slugUtils.js';

const SubredditPageSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  title_tag: {
    type: String,
    required: true,
    trim: true
  },
  meta_description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 160
  },
  h1: {
    type: String,
    required: true,
    trim: true
  },
  intro: {
    type: String,
    required: true,
    trim: true
  },
  cta_text: {
    type: String,
    required: true,
    trim: true,
    default: 'Get Started'
  },
  cta_section: {
    title: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    button_text: {
      type: String,
      trim: true
    }
  },
  subreddits: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    member_count: {
      type: Number
    },
    category: {
      type: String,
      trim: true
    },
    icon_url: {
      type: String,
      trim: true
    },
    icon_alt: {
      type: String,
      trim: true
    }
  }],
  seo_data: {
    canonical_url: {
      type: String,
      trim: true
    },
    og_title: {
      type: String,
      trim: true
    },
    og_description: {
      type: String,
      trim: true
    },
    og_image: {
      type: String,
      trim: true
    },
    twitter_title: {
      type: String,
      trim: true
    },
    twitter_description: {
      type: String,
      trim: true
    },
    twitter_image: {
      type: String,
      trim: true
    }
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'published'
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// Index for better query performance
SubredditPageSchema.index({ slug: 1 });
SubredditPageSchema.index({ keyword: 1 });
SubredditPageSchema.index({ status: 1 });

// Pre-save middleware to update the updated_at field and auto-generate slug
SubredditPageSchema.pre('save', function(next) {
  this.updated_at = new Date();
  
  // Auto-generate slug from keyword if not provided or if keyword changed
  if (this.isModified('keyword') || !this.slug) {
    this.slug = generateSlugFromKeyword(this.keyword);
  }
  
  // Normalize existing slug
  if (this.slug) {
    this.slug = normalizeSlug(this.slug);
  }
  
  next();
});

// Static method to find by slug
SubredditPageSchema.statics.findBySlug = function(slug) {
  return this.findOne({ slug: slug.toLowerCase(), status: 'published' });
};

// Static method to find by keyword
SubredditPageSchema.statics.findByKeyword = function(keyword) {
  return this.findOne({ keyword: keyword.toLowerCase(), status: 'published' });
};

// Static method to get all published pages
SubredditPageSchema.statics.findAllPublished = function() {
  return this.find({ status: 'published' }).sort({ created_at: -1 });
};

export default mongoose.models.SubredditPage || mongoose.model('SubredditPage', SubredditPageSchema);
