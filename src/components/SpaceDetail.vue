<template>
  <div
    v-for="(content, index) in Object.values(contentDetail[category])"
    :key="content"
    :class="getViewClass(category)"
  >
    <!-- Si l'index == currentContent alors on montre le contenu du tableau selectionné -->
    <div v-show="currentContent == index" class="content">
      <!-- Display de l'image selon sa catégory (props) -->
      <img
        v-if="category == 'technology'"
        :src="require(`@/assets/Content/${content.images.portrait}`)"
        alt="portrait"
        srcset=""
      />
      <img
        v-else
        :src="require(`@/assets/Content/${content.images.png}`)"
        alt="png"
        srcset=""
      />
      <div class="content-text">
        <!-- Button Technology Page -->
        <div
          v-if="category == 'technology'"
          id="technology"
          class="content-button-container"
          :style="
            category == 'technology' && windowSize > 768
              ? 'flex-direction: column'
              : 'flex-direction: row'
          "
        >
          <button
            @click="currentContent = index"
            v-for="(content, index) in Object.values(contentDetail[category])"
            :key="content"
            :class="
              currentContent == index
                ? 'button-technology active'
                : 'button-technology '
            "
          >
            {{ index }}
          </button>
        </div>
        <!-- DESTINATIONS -->
        <ul v-if="category == 'destinations'">
          <!-- changement de contenu au click -->
          <li
            v-for="(content, index) in Object.values(contentDetail[category])"
            :key="content"
            :class="{ active: currentContent === index }"
            @click="currentContent = index"
          >
            {{ content.name }}
          </li>
        </ul>
        <h3>{{ content.role }}</h3>
        <div>
          <h2>
            {{ content.name }}
          </h2>
          <p>{{ content.description }}</p>
          <p>{{ content.bio }}</p>
           <!-- page Destinations = Display seulement la distance et le travel  -->
        <div class="content-text-destination" v-if="category == 'destinations'">
          <span class="content-text-destination-line"></span>
          <div class="content-text-destination-title">
            <div>
              <h3>AVG. DISTANCE</h3>
              <span class="content-text-destination-subtitle">{{
                content.distance
              }}</span>
            </div>
            <div>
              <h3>EST. TRAVEL TIME</h3>
              <span class="content-text-destination-subtitle">{{
                content.travel
              }}</span>
            </div>
          </div>
        </div>

          <!-- Button CREW Page -->
          <div v-if="category == 'crew'" class="content-button-container">
            <button
              @click="currentContent = index"
              v-for="(content, index) in Object.values(contentDetail[category])"
              :key="content"
              :class="
                currentContent == index ? 'button-crew active' : 'button-crew '
              "
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import Content from "../types/Content";

export default defineComponent({
  props: {
    category: {
      required: true,
      type: String,
    },
  },
  setup() {
    const currentContent = ref<number>(0);
    const windowSize = ref<number>(window.innerWidth);
    const contentDetail = reactive<Content>({
      destinations: [
        {
          name: "Moon",
          images: {
            png: "Destination/image-moon.png",
          },
          description:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          distance: "384,400 km",
          travel: "3 days",
        },
        {
          name: "Mars",
          images: {
            png: "Destination/image-mars.png",
          },
          description:
            "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          distance: "225 mil. km",
          travel: "9 months",
        },
        {
          name: "Europa",
          images: {
            png: "Destination/image-europa.png",
          },
          description:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          distance: "628 mil. km",
          travel: "3 years",
        },
        {
          name: "Titan",
          images: {
            png: "Destination/image-titan.png",
          },
          description:
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          distance: "1.6 bil. km",
          travel: "7 years",
        },
      ],
      crew: [
        {
          name: "Douglas Hurley",
          images: {
            png: "Crew/image-douglas-hurley.png",
          },
          role: "Commander",
          bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        },
        {
          name: "Mark Shuttleworth",
          images: {
            png: "Crew/image-mark-shuttleworth.png",
          },
          role: "Mission Specialist",
          bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        },
        {
          name: "Victor Glover",
          images: {
            png: "Crew/image-victor-glover.png",
          },
          role: "Pilot",
          bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a Crew member of Expedition 64, and served as a station systems flight engineer.",
        },
        {
          name: "Anousheh Ansari",
          images: {
            png: "Crew/image-anousheh-ansari.png",
          },
          role: "Flight Engineer",
          bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        },
      ],
      technology: [
        {
          name: "Launch vehicle",
          images: {
            portrait: "Technology/image-launch-vehicle-portrait.jpg",
          },
          description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        },
        {
          name: "Spaceport",
          images: {
            portrait: "Technology/image-spaceport-portrait.jpg",
          },
          description:
            "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        },
        {
          name: "Space capsule",
          images: {
            portrait: "Technology/image-space-capsule-portrait.jpg",
          },
          description:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        },
      ],
    });

    const getViewClass = (category: string) => {
      if (category === "destinations") {
        return "destination";
      } else if (category === "crew") {
        return "crew";
      } else {
        return "technology";
      }
    };
    return { currentContent, contentDetail, windowSize, getViewClass };
  },
});
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";
p {
  color: $white;
  @media (max-width: 768px) {
    text-align: center;
  }
}
// destination style
.destination {
  .content {
    @include flexbox(row, space-around, center);
    height: 420px;
    @media (max-width: 992px) {
      @include flexbox(column, flex-end, center);

      height: auto;
    }
    .content-text {
      max-width: 500px;
      text-align: left;
      ul {
        display: flex;
        margin: 0;
        padding: 0;
        gap: 10px;
        @media (max-width: 992px) {
          justify-content: center;
        }
        li {
          color: $white;
          list-style: none;
          cursor: $pointer;
          width: auto;
          padding: 5px;
          &.active {
            border-bottom: 2px solid $white;
          }
        }
      }
      h2 {
        font-size: 5rem;
        color: $white;
        font-weight: 400;
        text-transform: uppercase;
        padding: 30px 0;
        @media (max-width: 992px) {
          text-align: center;
        }
      }
      .content-text-destination-line {
        content: "";
        position: static;
        width: 100%;
        display: block;
        margin: 20px 0;
        height: 1px;
        background: $white;
      }
      .content-text-destination-title {
        display: flex;
        gap: 40px;
        @media (max-width: 992px) {
          justify-content: space-between;
        }
        h3 {
          font-size: 0.8rem;
          color: $grey;
        }
        .content-text-destination-subtitle {
          font-family: $primary-font;
          color: $white;
          font-size: 1.7rem;
          text-transform: uppercase;
          font-weight: lighter;
        }
      }
    }
    img {
      @include imageProperty(auto, 600px, 100%);
      margin-right: 80px;
      @media (max-width: 992px) {
        @include imageProperty(auto, 120px, 100%);
        margin-right: 0;
        margin-bottom: 30px;
      }
    }
  }
}
// crew style
.crew {
  .content {
    @include flexbox(row, flex-start, center);
    max-width: 40%;
    height: 420px;
    text-align: left;
    @media (max-width: 768px) {
      max-width: 100%;
      @include flexbox(row, flex-start, flex-start);
    }

    img {
      position: absolute;
      bottom: 0;
      right: 10%;
      @include imageProperty(auto, 60%, 100%);
      @media (max-width: 992px) {
        @include imageProperty(auto, 50%, 100%);
      }
      @media (max-width: 768px) {
        @include imageProperty(auto, 33%, 100%);
      }
    }
    h2 {
      font-size: 2.8rem;
      text-transform: uppercase;
      color: $white;
      padding: 15px 0 30px;
      @media (max-width: 768px) {
        text-align: center;
        font-size: 1.6rem;
      }
    }
    h3 {
      font-size: 1.5rem;
      text-transform: uppercase;
      color: $grey;
      @media (max-width: 768px) {
        text-align: center;
        font-size: 1.3rem;
      }
    }
  }
}
// technology style
.technology {
  .content {
    @include flexbox(row-reverse, flex-start, center);
    max-width: 50%;
    height: 420px;
    text-align: left;
    @media (max-width: 992px) {
      max-width: 100%;
      @include flexbox(column-reverse, flex-end, flex-start);
      height: auto;
    }
    .content-text {
      display: flex;
      align-items: center;
      @media (max-width: 768px) {
        display: block;
      }
    }
    img {
      position: absolute;
      right: 0;
      @include imageProperty(35%, null, auto);

      @media (max-width: 992px) {
        @include imageProperty(50%, null, auto);
        position: static;
        margin: 0 auto;
      }
    }
    h2 {
      font-size: 2.3rem;
      text-transform: uppercase;
      color: $white;
      padding: 15px 0 30px;
      @media (max-width: 768px) {
        font-size: 1.6rem;
        text-align: center;
      }
    }
    h3 {
      font-size: 1.8rem;
      text-transform: uppercase;
      color: $white;
      opacity: 0.5;
    }
  }
}

// Buttons style
.content-button-container {
  text-align: left;
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
    z-index: 9;
    position: relative;
  }
  .button-crew {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
    border: none;
    background: $grey;
    cursor: $pointer;
    &.active {
      background: $white;
    }
  }
  .button-technology {
    width: 50px;
    height: 50px;
    border: 1px solid $white;
    border-radius: 50%;
    background: transparent;
    color: $white;
    cursor: $pointer;
    &:not(:last-child) {
      margin: 0 50px 40px 0;
    }
    &.active {
      background: $white;
      color: black;
    }
  }
}
</style>