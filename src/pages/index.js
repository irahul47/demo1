import React from "react";
import Button from "../components/ui/Button/Button";
import Card from "../components/ui/Card/Card";

const cards = [
  {
    id: 1,
    title: "Most Popular Nature Photographs",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    imgSrc:
      "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 2,
    title: "Most Popular Nature Photographs",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    imgSrc:
      "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 3,
    title: "Most Popular Nature Photographs",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    imgSrc:
      "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 4,
    title: "Most Popular Nature Photographs",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    imgSrc:
      "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 5,
    title: "Most Popular Nature Photographs",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    imgSrc:
      "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export default function Index() {
  return (
    <>
      <h1>Hello Index.js</h1>
      <Button redirect="/about">Index to About</Button>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => {
          return (
            <div key={card.id}>
              <Card
                title={card.title}
                description={card.description}
                imageSrc={card.imgSrc}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
