import { IPatient } from '../interfaces/patient';

export function useGetUser(): IPatient {
  return {
    age: 64,
    name: 'Rizaluddin ',
    lastName: 'Bin Mohd Salleh',
    number: '461204022365',
    gender: 'female',
    address: 'No 2 Jalan 3/23, Kajang, Hulu Langat, 43650 Selangor',
    status: 'approved',
    lastVisit: '18 Dec 2020',
    img: `${window.origin}/content/user-400-1.jpg`
  };
}
