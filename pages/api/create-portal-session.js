import Stripe from 'stripe';
import User from '@/backend/user';
import connectMongoDB from '@/backend/mongodb';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectMongoDB();
    const user = await User.findOne({ name: req.body.name });

    if (!user?.customer_id) {
      return res.status(200).json({ url: `${process.env.NEXTAUTH_URL}/#pricing` });
    }

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: user.customer_id,
      return_url: `${process.env.NEXTAUTH_URL}/dashboard/onboarding`,
    });

    return res.status(200).json({ url: portalSession.url });
  } catch (error) {
    return res.status(200).json({ url: `${process.env.NEXTAUTH_URL}/#pricing` });
  }
} 