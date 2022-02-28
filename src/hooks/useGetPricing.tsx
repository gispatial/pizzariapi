import { IPricing } from '../interfaces/pricing';

export function useGetPricing(): IPricing[] {
  return [
    {
      title: 'Full NCD Screening: (Adult)',
      price: 30,
      diskSpace: 1,
      monthlyBandwith: 10,
      accounts: 2,
      subdomainsLimit: true,
      freeSupport: false
    },
    {
      title: 'Developers',
      price: 25,
      diskSpace: 5,
      monthlyBandwith: 25,
      accounts: 5,
      subdomainsLimit: true,
      freeSupport: false
    },
    {
      title: 'Premium',
      price: 65,
      diskSpace: 10,
      monthlyBandwith: 100,
      accounts: 20,
      subdomainsLimit: true,
      freeSupport: true
    }
  ];
}
