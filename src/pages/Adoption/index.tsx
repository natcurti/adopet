import { useEffect } from "react";
import CardAnimal from "src/components/CardAnimal";
import ContainerInnerPage from "src/components/ContainerInnerPage";
import Text from "src/components/Text";
import { getAnimals } from "src/store/reducers/sliceAnimals";
import { useAppDispatch, useAppSelector } from "src/types/hooks";

const Adoption = () => {
  const animals = useAppSelector((state) => state.animals);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAnimals());
  }, [dispatch]);

  console.log(animals[0]);

  return (
    <ContainerInnerPage isLoggedIn>
      <h1>
        <Text color="blue">Olá! Veja os amigos disponíveis para adoção!</Text>
      </h1>
      {animals.map((animal) => (
        <CardAnimal key={animal.id} {...animal} />
      ))}
    </ContainerInnerPage>
  );
};

export default Adoption;
