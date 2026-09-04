import { Catalogue } from "./catalogue";
import { Pourquoi } from "./pourquoi";

export const metadata = {
  title: "Boutique · Uncommon People Tribe",
  description: "Polos et tee-shirts premium de la marque martiniquaise Uncommon People Tribe.",
};

export default function Boutique() {
  return (
    <>
      <Catalogue />
      <Pourquoi />
    </>
  );
}
