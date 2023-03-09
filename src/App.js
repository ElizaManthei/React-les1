import React from 'react';
import './App.css';
import Button from "./components/Button/Button";
import Producten from "./components/Producten/Producten";
import Tegels from "./components/Tegels/Tegels";
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import story from './assets/our_story.png';

function App() {
  function printInConsole(txt){
    console.log(txt);
  }
  function productPrice(price){
    return `€${price},-`
  }
  function productName(name){
    return `The ${name} bag`
  }
  const navButton1Text = "to the collection";
  const navButton2Text = "shop all bags";
  const navButton3Text = "pre-orders";
  const labelBestSeller = "Best seller";
  const labelNewCollection = "New collection";

  return (
      <>
      <h1>Handbags & Purses</h1>

      <nav>
        <Button
            isDisabled = {false}
            buttonText = {navButton1Text}
            print = {() => printInConsole(navButton1Text)}
        ></Button>

        <Button
            isDisabled = {false}
            buttonText = {navButton2Text}
            print = {() => printInConsole(navButton2Text)}
        ></Button>

        <Button
            isDisabled = {true}
            buttonText = {navButton3Text}
            print = {() => printInConsole(navButton3Text)}
        ></Button>
      </nav>

      <main>
        <Producten
            label = {labelBestSeller}
            imageSrc = {bag_1}
            imageAlt = "Bag 1"
            name = {productName( "handy")}
            price = {productPrice(400)}
        ></Producten>

        <Producten
            label = {labelBestSeller}
            imageSrc = {bag_2}
            imageAlt = "Bag 2"
            name = {productName("stylish")}
            price = {productPrice(250)}
        ></Producten>

        <Producten
            label = {labelNewCollection}
            imageSrc = {bag_3}
            imageAlt = "Bag 3"
            name = {productName("simple")}
            price = {productPrice(300)}
        ></Producten>

        <Producten
            label = {labelNewCollection}
            imageSrc = {bag_4}
            imageAlt = "Bag 4"
            name = {productName("trendy")}
            price = {productPrice(150)}
        ></Producten>
      </main>

      <footer>
        <Tegels title = "The brand">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aspernatur consectetur doloremque laborum natus numquam qui reiciendis rem sapiente!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores dolore ipsum nulla provident quae, quo sapiente sit totam ullam! Alias aliquam magnam magni nemo nesciunt praesentium quidem quisquam totam?</p>
        </Tegels>

        <Tegels
            imageSrc = {brand}
            imageAlt = "Brand foto"
        ></Tegels>

        <Tegels
            imageSrc = {story}
            imageAlt = "Our story foto"
        ></Tegels>

        <Tegels title = "Our story">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem consectetur cum distinctio et eum hic ipsa, ipsam libero non porro provident quae quaerat quam similique sint sit veniam voluptatem."</p>
        </Tegels>
      </footer>
      </>
  );
}

export default App;



