import Carousel from "react-multi-carousel";
import "./App.css";
import Product from "./Product";
import { productData, responsive } from "./data";
import "react-multi-carousel/lib/styles.css";
import { Stack, useMediaQuery } from "@mui/material";

function App() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="App">
      <h1>React multi carousel</h1>
      <Stack
        style={{
          position: "relative",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Carousel
          showDots={isMobile && true}
          responsive={responsive}
          className="reactCoursel"
          arrows={!isMobile && true}
          swipeable={true}
          minimumTouchDrag={50}
          // draggable={true}
        >
          {product}
        </Carousel>
      </Stack>
    </div>
  );
}

export default App;
