import React from "react";
import styled from "styled-components";

const Gallery = () => {
  return (
    <Container>
      <div class="photo-album">
        <h1>
          <span>
            Projects{" "}
            <abbr title="and" class="amp">
              &amp;
            </abbr>{" "}
            Recent works
          </span>
        </h1>

        <a
          href="http://www.flickr.com/photos/nataliedowne/2254117707/in/set-72157604232220981"
          class="large polaroid img1"
        >
          <img src="http://media.24ways.org/2009/14/img/volcanic.jpg" alt="" />
          This breathtaking volcanic lake is at Wai-O-Tapu Thermal Wonderland
        </a>
        <a
          href="http://www.flickr.com/photos/nataliedowne/2254700486/in/set-72157604232220981/"
          class="polaroid img2"
        >
          <img src="http://media.24ways.org/2009/14/img/waterfall.jpg" alt="" />
          This lovely waterfall was at Rotorua in Rainbow Springs
        </a>
        <a
          href="http://www.flickr.com/photos/nataliedowne/2254704566/in/set-72157604232220981/"
          class="small polaroid img3"
        >
          <img src="http://media.24ways.org/2009/14/img/leaf.jpg" alt="" />
          Ferntastic
        </a>

        <a
          href="http://www.flickr.com/photos/nataliedowne/2311404989/in/set-72157604232220981/"
          class="medium polaroid img4"
        >
          <img src="http://media.24ways.org/2009/14/img/whale.jpg" alt="" />
          At Kaikoura we went whale watching!
        </a>

        <a
          href="http://www.flickr.com/photos/nataliedowne/2312219680/in/set-72157604232220981"
          class="polaroid img5"
        >
          <img src="http://media.24ways.org/2009/14/img/seal.jpg" alt="" />
          Found this little cutie on a walk in New Zealand!
        </a>

        <a
          href="http://www.flickr.com/photos/nataliedowne/2254789880/in/set-72157604232220981/"
          class="polaroid img6"
        >
          <img src="http://media.24ways.org/2009/14/img/lake.jpg" alt="" />
          An amazing bubbling volcanic spring, a bit muddy
        </a>

        <a
          href="http://www.flickr.com/photos/nataliedowne/2341399904/in/set-72157604232220981/"
          class="polaroid img7"
        >
          <img src="http://media.24ways.org/2009/14/img/simon.jpg" alt="" />
          Simon in a giant Kiwi, pretending to be a Kiwi (the bird)
        </a>
        <a
          href="http://www.flickr.com/photos/nataliedowne/2352603191/in/set-72157604232220981/"
          class="small polaroid img8"
        >
          <img src="http://media.24ways.org/2009/14/img/albatross.jpg" alt="" />
          Albatross in Dunedin
        </a>
        <a
          href="http://www.flickr.com/photos/nataliedowne/2340993237/in/set-72157604232220981/"
          class="medium polaroid img9"
        >
          <img src="http://media.24ways.org/2009/14/img/raft.jpg" alt="" />
          White water rafting in Queenstown
        </a>
        <a
          href="http://www.flickr.com/photos/nataliedowne/2306995686/in/set-72157604033893095/"
          class="polaroid img10"
        >
          <img
            src="http://media.24ways.org/2009/14/img/whiteisland.jpg"
            alt=""
          />
          White Island
        </a>
        <a
          href="http://www.flickr.com/photos/nataliedowne/2306989200/in/set-72157604033893095/"
          class="small polaroid img11"
        >
          <img src="http://media.24ways.org/2009/14/img/sulphur.jpg" alt="" />
          Sulphurous
        </a>
        <a
          href="http://www.flickr.com/photos/nataliedowne/2352608953/in/set-72157604232220981/"
          class="small polaroid img12"
        >
          <img src="http://media.24ways.org/2009/14/img/sealions.jpg" alt="" />
          Sea lions!
        </a>
        <a
          href="http://www.flickr.com/photos/nataliedowne/2341816430/in/set-72157604232220981/"
          class="small polaroid img13"
        >
          <img src="http://media.24ways.org/2009/14/img/horses.jpg" alt="" />
          Horse riding
        </a>
        <a
          href="http://www.flickr.com/photos/nataliedowne/2352490411/in/set-72157604232220981/"
          class="small polaroid img14"
        >
          <img src="http://media.24ways.org/2009/14/img/camping.jpg" alt="" />
          Stewart Island
        </a>
        <a
          href="http://www.flickr.com/photos/nataliedowne/2339184562/in/set-72157604232220981/"
          class="polaroid img15"
        >
          <img src="http://media.24ways.org/2009/14/img/us.jpg" alt="" />
          Us in a blue cave on the Franz Josef glacier
        </a>
      </div>
    </Container>
  );
};

export default Gallery;

const Container = styled.div`
  padding: 80px 0;
  background-color: #e9e9e9;
`;
