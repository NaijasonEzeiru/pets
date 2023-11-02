import { PetSchemaType } from '@/utils/schemas';
import VerticalProductCard from './VerticalPetsCard';
import { apiAddress } from '@/utils/variables';

async function fetchPets() {
  const res = await fetch(`${apiAddress}/api/pets`, {
    cache: 'no-store'
  });
  if (!res.ok) return undefined;
  const data = await res.json();
  return data;
}

const HomePetsCard = async () => {
  const pets: PetSchemaType[] = await fetchPets();

  return (
    <div className='pl-3 md:pl-6 w-full py-11 grid gap-x-3 md:gap-x-5 gap-y-4 md:gap-y-6 gtc grid-flow-row'>
      {pets.length > 0 &&
        pets.map((v) => (
          <VerticalProductCard
            key={v.id}
            id={v.id!}
            location={`${v.city}, ${v.state}`}
            productName={`${v.breed} ${
              v.purebred == 'Yes' ? 'purebred' : 'mixed'
            } (${v.age}) ${v.gender}`}
            img={v.imgs[0]}
          />
        ))}
    </div>
  );
};

export default HomePetsCard;
