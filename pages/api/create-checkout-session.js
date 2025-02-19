import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51QlU3q02QnJoD6QkIkOzO0Au3DwQyvDYmt1ymZREC5cCiurMcbpJ9t1OrnayT8H5GFzioKVMWhcXbNVCsKijhAUu00GTtWp28G', {
  apiVersion: '2022-11-15',
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { price, dateRange } = req.body;

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Listing Reservation',
                description: `Reservation from ${dateRange.startDate} to ${dateRange.endDate}`,
              },
              unit_amount: price * 100, // Stripe expects the amount in cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      res.status(200).json({ url: session.url });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
