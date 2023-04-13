# Quasar & Notions VueJS

## Reactive
const counter = reactive({ count: 0 })


## Attribute Bindings
<h1 :class="titleClass">Make me red</h1> // v-bind ==> :


## Event Listeners
<button v-on:click="increment">{{ count }}</button> 
<button @click="increment">{{ count }}</button>

## Forms
<input :value="text" @input="onInput">
<input v-model="text">

## Conditional Rendering
<h1 v-if="show">Hello</h1>
<h1 v-else>Good Bye</h1>

## List Rendering
<ul>
  <li v-for="item in items" :key="item.id">
    {{ item.name }}
  </li>
</ul>

## Computed Properties
const counter = reactive({ count: 0 })
const double = computed(() => counter.count * 2)

## Lifecycle 
onMounted(() => {
  // do something
  p.value.textContent = 'Hello'
})

## Watchers
const count = ref(0)
watch(count, (newCount) => {
  console.log(newCount)
})

## Componenents
import Child from "./Child.vue";

<template>
    <div>
        <Child />
    </div> 
</template>

## Props from Parent to Child
<Child :message="message" />

<!-- ChildComp.vue -->
<script setup>
const props = defineProps({
  message: String
})
</script>

## Emits from Child to Parent
<ChildComp @response="(msg) => childMsg = msg" />

<!-- ChildComp.vue -->
<script setup>
// declare emitted events
const emit = defineEmits(['response'])

// emit with argument
emit('response', 'hello from child')
</script>

## Slots from Parent to Child (templates)
const msg = ref('from parent')
</script>

<template>
  <ChildComp>Message: {{ msg }}</ChildComp>
</template>
