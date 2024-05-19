import { useEffect } from "react";
import CardAnimal from "src/components/CardAnimal";
import ContainerInnerPage from "src/components/ContainerInnerPage";
import Text from "src/components/Text";
import { getAnimals } from "src/store/reducers/sliceAnimals";
import { useAppDispatch, useAppSelector } from "src/types/hooks";
import styles from "./Adoption.module.scss";

const Adoption = () => {
  const animals = useAppSelector((state) => state.animals);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAnimals());
  }, [dispatch]);

  return (
    <ContainerInnerPage isLoggedIn>
      <h1 className={styles.title}>
        <Text color="blue">Olá! Veja os amigos disponíveis para adoção!</Text>
      </h1>
      <main className={styles.container}>
        <div className={styles.cards}>
          {animals.map((animal) => (
            <CardAnimal key={animal.id} {...animal} />
          ))}
        </div>
      </main>
    </ContainerInnerPage>
  );
};

export default Adoption;
