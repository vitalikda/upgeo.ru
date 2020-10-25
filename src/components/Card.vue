<template>
  <div
    class="relative flex flex-col w-full min-w-0 mt-6 mb-6 break-words rounded-lg shadow-lg"
    :class="color != 'orange' ? 'bg-gray-900' : 'bg-orange-600'"
  >
    <g-image
      v-if="hasImage"
      :alt="title"
      :src="image"
      class="w-full align-middle rounded-t-lg"
      width="500"
    />
    <blockquote class="relative p-8 mb-4">
      <svg
        v-if="hasImage"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 583 95"
        class="absolute left-0 block w-full"
        style="height: 95px; top: -94px;"
      >
        <polygon
          :points="
            color != 'orange' ? '0,65 0,95 613,95' : '-30,95 583,95 583,65'
          "
          class="fill-current"
          :class="color != 'orange' ? 'text-gray-900' : 'text-orange-600'"
        ></polygon>
      </svg>
      <h4 v-if="title != null" class="text-xl font-bold text-white">
        {{ title }}
      </h4>
      <p v-if="description != null" class="mt-2 font-light text-white text-md">
        {{ description }}
      </p>
      <p
        v-if="path != null"
        class="mt-4 font-semibold text-white text-md hover:opacity-75 "
      >
        <g-link :to="path">
          Читать далее
          <font-awesome-icon
            :icon="['fas', 'angle-double-right']"
            class="leading-relaxed"
          />
        </g-link>
      </p>
    </blockquote>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    path: {
      type: String,
      default: null,
    },
    image: {
      type: String | Object,
      default: null,
    },
    color: {
      type: String,
      default: 'orange',
    },
  },
  computed: {
    hasImage() {
      return this.image ? true : false;
    },
  },
};
</script>

<style></style>
