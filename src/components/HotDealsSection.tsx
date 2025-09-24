import { useEffect, useMemo, useState } from 'react';
import { Star, LucideBellElectric } from 'lucide-react';
import { motion } from "framer-motion"

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const formatPrice = (value: number) => currencyFormatter.format(value);

const calculateDiscountPercent = (originalPrice: number, discountedPrice: number) => {
  if (!originalPrice) {
    return 0;
  }

  return Math.max(0, Math.round(((originalPrice - discountedPrice) / originalPrice) * 100));
};

const deals = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Wireless Bluetooth Earbuds",
    rating: 4.8,
    originalPrice: 89.99,
    discountedPrice: 34.99,
    discount: 61,
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Smart Fitness Watch",
    rating: 4.6,
    originalPrice: 199.99,
    discountedPrice: 79.99,
    discount: 60,
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "LED Desk Lamp with USB",
    rating: 4.9,
    originalPrice: 45.99,
    discountedPrice: 19.99,
    discount: 57,
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Portable Phone Stand",
    rating: 4.7,
    originalPrice: 24.99,
    discountedPrice: 9.99,
    discount: 60,
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Skincare Gift Set",
    rating: 4.8,
    originalPrice: 79.99,
    discountedPrice: 39.99,
    discount: 50,
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Cozy Throw Blanket",
    rating: 4.9,
    originalPrice: 59.99,
    discountedPrice: 24.99,
    discount: 58,
  },
];

const FLASH_SALE_BASE_MINUTES = 75;
const FLASH_SALE_JITTER_MINUTES = 20;

const createNextDeadline = () => {
  const jitter = Math.floor(Math.random() * FLASH_SALE_JITTER_MINUTES);
  return Date.now() + (FLASH_SALE_BASE_MINUTES + jitter) * 60 * 1000;
};

const flashSaleItems = [
  {
    id: 'fs-1',
    image: 'https://images.pexels.com/photos/6347544/pexels-photo-6347544.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Wireless Studio Headphones Pro',
    originalPrice: 219.99,
    discountedPrice: 96.99,
    stockLeft: 18,
    stockTotal: 120,
  },
  {
    id: 'fs-2',
    image: 'https://images.pexels.com/photos/1122410/pexels-photo-1122410.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '4K Action Camera Bundle',
    originalPrice: 329.99,
    discountedPrice: 139.49,
    stockLeft: 9,
    stockTotal: 80,
  },
  {
    id: 'fs-3',
    image: 'https://images.pexels.com/photos/1802357/pexels-photo-1802357.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Ergonomic Gaming Chair Lite',
    originalPrice: 259.99,
    discountedPrice: 118.99,
    stockLeft: 25,
    stockTotal: 150,
  },
];

export default function HotDealsSection() {
  const [deadline, setDeadline] = useState<number>(() => createNextDeadline());
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (deadline <= now) {
      const reboundDelay = 800 + Math.random() * 900;
      const timeout = window.setTimeout(() => {
        setDeadline(createNextDeadline());
        setNow(Date.now());
      }, reboundDelay);

      return () => window.clearTimeout(timeout);
    }
  }, [deadline, now]);

  const timeLeft = Math.max(0, deadline - now);

  const timeParts = useMemo(() => {
    const totalSeconds = Math.max(0, Math.floor(timeLeft / 1000));
    const hours = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(totalSeconds % 60)
      .toString()
      .padStart(2, '0');

    return { hours, minutes, seconds };
  }, [timeLeft]);

  const countdownBlocks = useMemo(
    () => [
      { label: 'Hours', value: timeParts.hours },
      { label: 'Minutes', value: timeParts.minutes },
      { label: 'Seconds', value: timeParts.seconds },
    ],
    [timeParts],
  );

  const urgencyMessage = useMemo(() => {
    if (timeLeft <= 60 * 1000) {
      return "Final seconds! Deals flip any moment.";
    }
    if (timeLeft <= 5 * 60 * 1000) {
      return 'Running hot — grab your favourites before the reset.';
    }
    return "Limited stock refreshed every cycle. Don't miss the secret drops.";
  }, [timeLeft]);

  const isUrgent = timeLeft <= 10 * 60 * 1000;

  return (
    <section id="deals" className="bg-background-gray section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-primary-blue text-white shadow-xl mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/90 via-primary-orange/60 to-primary-teal/80 opacity-80" />
          <div className="relative flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, -15, 15, -10, 10, -5, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    className="inline-flex items-center"
                  >
                    <LucideBellElectric className="mr-2 text-yellow-500 " />
                  </motion.div>
                  <p className="uppercase tracking-[0.35em] text-md text-white/70">
                    Flash Sale
                  </p>
                </div>
                <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                  Extra savings unlocked for a limited window
                </h3>
                <p className="mt-3 text-sm text-white/80 md:text-base">{urgencyMessage}</p>
              </div>
              <div
                className={`flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur ${isUrgent ? 'ring-2 ring-white/60 shadow-[0_0_35px_rgba(255,87,34,0.45)]' : ''
                  }`}
              >
                {countdownBlocks.map(({ label, value }) => (
                  <div
                    key={label}
                    className={`grid min-w-[64px] place-items-center rounded-xl px-4 py-3 text-center font-mono ${isUrgent ? 'bg-white/20 text-white shadow-inner shadow-primary-orange/40' : 'bg-white/15 text-white'
                      }`}
                  >
                    <span className="text-2xl font-bold md:text-3xl">{value}</span>
                    <span className="mt-1 text-[0.65rem] uppercase tracking-widest text-white/70">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="-mx-2 flex gap-4 overflow-x-auto pb-2 pt-1 [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0">
              {flashSaleItems.map((item) => {
                const discountPercent = calculateDiscountPercent(
                  item.originalPrice,
                  item.discountedPrice,
                );
                const stockPercent = item.stockTotal
                  ? Math.max(
                    0,
                    Math.min(100, Math.round((item.stockLeft / item.stockTotal) * 100)),
                  )
                  : 0;
                const claimedPercent = 100 - stockPercent;
                const isAlmostGone = claimedPercent >= 75;
                const isLastCall = claimedPercent >= 90;

                const stockBadgeLabel = isLastCall
                  ? 'Last call'
                  : isAlmostGone
                    ? 'Almost gone'
                    : 'Hot pick';

                return (
                  <div
                    key={item.id}
                    className="group flex min-w-[240px] flex-col gap-4 rounded-2xl bg-white/15 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 md:min-w-0"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl shadow-lg shadow-primary-orange/30 ring-2 ring-white/40">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/60">Lightning Drop</p>
                        <h4 className="mt-1 text-sm font-semibold leading-tight text-white">
                          {item.title}
                        </h4>
                        <div className="mt-3 flex flex-wrap items-center gap-2 text-white">
                          <span className="text-xl font-semibold">
                            {formatPrice(item.discountedPrice)}
                          </span>
                          <span className="text-sm text-white/60 line-through">
                            {formatPrice(item.originalPrice)}
                          </span>
                          <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold">
                            -{discountPercent}%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-[0.7rem] text-white/75">
                        <span className="inline-flex items-center gap-1">
                          <span
                            className={`inline-flex h-2.5 w-2.5 rounded-full ${isLastCall
                              ? 'bg-red-400 shadow-[0_0_0_4px_rgba(239,68,68,0.25)]'
                              : isAlmostGone
                                ? 'bg-orange-300 shadow-[0_0_0_4px_rgba(251,146,60,0.2)]'
                                : 'bg-primary-orange/80 shadow-[0_0_0_4px_rgba(255,119,71,0.18)]'
                              }`}
                          />
                          Claimed {claimedPercent}%
                        </span>
                        <span
                          className={`rounded-full px-2 py-0.5 font-semibold uppercase tracking-wide ${isLastCall
                            ? 'bg-red-500/20 text-red-100'
                            : isAlmostGone
                              ? 'bg-orange-400/20 text-orange-100'
                              : 'bg-white/15 text-white/80'
                            }`}
                        >
                          {stockBadgeLabel}
                        </span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/15">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${isLastCall
                            ? 'bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300'
                            : isAlmostGone
                              ? 'bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200'
                              : 'bg-gradient-to-r from-primary-orange via-orange-300 to-amber-200'
                            }`}
                          style={{ width: `${Math.max(6, claimedPercent)}%` }}
                        />
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[0.7rem] text-white/70">
                        <span>{item.stockLeft} left</span>
                        <span>of {item.stockTotal}</span>
                      </div>
                    </div>
                    <button className="btn-secondary w-full border border-white/20 bg-white/10 text-center font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/20">
                      Claim Deal
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Today's Hot Deals
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Limited-time offers on trending products. Don't miss out on these amazing savings!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-xl shadow-lg card-hover overflow-hidden"
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-primary-orange text-white px-2 py-1 rounded-full text-sm font-semibold">
                  -{deal.discount}%
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-primary-blue mb-2 line-clamp-2">
                  {deal.title}
                </h3>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(deal.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    ({deal.rating})
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary-orange">
                      ${deal.discountedPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${deal.originalPrice}
                    </span>
                  </div>
                </div>

                <button className="w-full btn-secondary">
                  Get Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
