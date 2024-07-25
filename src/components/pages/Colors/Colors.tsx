import { useGetColors } from "../../../helpers/hooks/useGetColors";
import ColorItem from "../../ui/ColorItem/ColorItem";
import ColorItemSkeleton from "../../ui/ColorItemSkeleton/ColorItemSkeleton";

import styles from "./styles.module.scss";

const Colors = () => {
  const { data: colors, isLoading } = useGetColors();

  return (
    <section className={styles.colors}>
      <div className={styles.colors__items}>
        {isLoading || !colors ? (
          <ColorItemSkeleton count={10} />
        ) : (
          colors?.map((color) => (
            <ColorItem color={color} link key={color.id} />
          ))
        )}
      </div>
    </section>
  );
};

export default Colors;
