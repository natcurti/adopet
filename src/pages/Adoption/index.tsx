import { useEffect } from "react";
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

  console.log(animals);

  return (
    <ContainerInnerPage isLoggedIn>
      <Text color="blue">Olá! Veja os amigos disponíveis para adoção!</Text>
    </ContainerInnerPage>
  );
};

export default Adoption;
