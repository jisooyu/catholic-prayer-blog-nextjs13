import { gloriousPrePrayer, gloriousPrayers, postPrayers } from "@/prayers/prayers"
import CarouselComponent from "@/components/CarouselComponent"

const Glorious = () => {

  return (
    <main>
      <CarouselComponent prePrayer={gloriousPrePrayer} prayers={ gloriousPrayers} postPrayers={postPrayers} />
    </main>
  )
}

export default Glorious