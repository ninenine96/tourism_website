import React from "react";
import Gallery from "react-grid-gallery";
import "../App.css";
const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1621232082074-1a7750ecc557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1621232082074-1a7750ecc557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    thumbnailWidth: 300,
    thumbnailHeight: 420,
    caption: "Kashmir",
  },
  {
    src: "https://images.unsplash.com/photo-1567601169793-64703dc5324a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1567601169793-64703dc5324a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    // tags: [
    //   { value: "Ocean", title: "Ocean" },
    //   { value: "People", title: "People" },
    // ],
  },
  {
    src: "https://images.unsplash.com/photo-1590689080414-accd9e81828d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1590689080414-accd9e81828d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    thumbnailWidth: 320,
    thumbnailHeight: 420,
    // tags: [
    //   { value: "Ocean", title: "Ocean" },
    //   { value: "People", title: "People" },
    // ],
  },
  {
    src: "https://images.unsplash.com/photo-1568889753852-196c487a536e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1568889753852-196c487a536e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://images.unsplash.com/photo-1560853950-2502ec2ab867?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1560853950-2502ec2ab867?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    thumbnailWidth: 300,
    thumbnailHeight: 420,
  },
  {
    src: "https://images.unsplash.com/photo-1623996243194-fd281057d568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1623996243194-fd281057d568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    // tags: [
    //   { value: "Ocean", title: "Ocean" },
    //   { value: "People", title: "People" },
    // ],
  },

  {
    src: "https://images.unsplash.com/photo-1567600668465-2e324c5cb8b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1567600668465-2e324c5cb8b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://images.unsplash.com/photo-1597076312431-f91f36d3c04a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1597076312431-f91f36d3c04a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://images.unsplash.com/photo-1620473488753-f74e93e4e22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1620473488753-f74e93e4e22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    thumbnailWidth: 320,
    thumbnailHeight: 420,
  },
  {
    src: "https://images.unsplash.com/photo-1629571545313-79c3f4823e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1202&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1629571545313-79c3f4823e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1202&q=80",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://images.unsplash.com/photo-1624254043725-17b101f88901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1624254043725-17b101f88901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    thumbnailWidth: 320,
    thumbnailHeight: 420,
  },
  {
    src: "https://images.unsplash.com/photo-1615552713642-73c367c8915c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1615552713642-73c367c8915c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80",
    thumbnailWidth: 300,
    thumbnailHeight: 212,
  },

  {
    src: "https://images.unsplash.com/photo-1612026342893-4d76f8a61d5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1612026342893-4d76f8a61d5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    thumbnailWidth: 320,
    thumbnailHeight: 420,
  },
  {
    src: "https://images.unsplash.com/photo-1531520140596-076b6929bc69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1531520140596-076b6929bc69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnailWidth: 300,
    thumbnailHeight: 212,
  },
];

export const GalleryComponent = () => {
  return (
    <div>
      <h1 className="gallery-heading">Gallery</h1>
      <div className="container-gallery">
        <div className="media-scroller">
          <Gallery
            enableImageSelection={false}
            backdropClosesModal={true}
            images={IMAGES}
          />
        </div>
      </div>
    </div>
  );
};
