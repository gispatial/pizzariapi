import { IPatient } from '../interfaces/patient';

export function useGetUser(): IPatient {
  return {
    age: 48,
    name: 'Naem',
    lastName: 'Binti Mahmod',
    number: '731203075002',
    gender: 'female',
    address: 'No. 36, Jalan 14/32, Seksyen 14, Petaling Jaya, Selangor',
    status: 'approved',
    lastVisit: '18 Dec 2020',
    img: `${window.origin}/content/user-400-1.jpg`
  };
}
