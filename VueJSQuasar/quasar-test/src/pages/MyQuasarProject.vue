<template>
    <q-page>
      <div class="q-pa-md">
        <div class="text-h4 text-center q-mb-lg q-mt-md">My Quasar Project</div>
  
        <div class="columns">
          <div class="column">
            <div class="row q-gutter-md">
              <div v-for="(card, index) in oddCards" :key="index" class="col-6">
                <q-card>
                  <q-card-section>
                    <img class="card-image" src="https://fakeimg.pl/300/">
                    <div class="text-h6">{{ card.label }}</div>
                    <div>{{ card.text }}</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
  
          <div class="column">
            <div class="row q-gutter-md">
              <div v-for="(card, index) in evenCards" :key="index" class="col-6">
                <q-card>
                  <q-card-section>
                    <img class="card-image" src="https://fakeimg.pl/300/">
                    <div class="text-h6">{{ card.label }}</div>
                    <div>{{ card.text }}</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
  
          <div class="column">
            <div class="text-h5">Quelles sont vos technologies préférées ?</div>
            <q-input v-model="newTech" label="Ajoutez une technologie" />
            <q-btn @click="addTech" label="Ajouter" />
  
            <q-list>
              <q-item v-for="(tech, index) in favoriteTechs" :key="index">
                <q-item-section>{{ tech }}</q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </q-page>
  </template>
  
  
  
  <script lang="ts">
import { defineComponent } from 'vue';
import jsonData from '../assets/data.json';

interface Card {
  id: string;
  label: string;
  text: string;
}

export default defineComponent({
  name: 'MyQuasarProject',
  data() {
    return {
      newTech: '',
      cards: jsonData.techno as Card[],
      favoriteTechs: [] as string[],
    };
  },
  computed: {
    oddCards(): Card[] {
      return this.cards.filter((_, index: number) => index % 2 !== 0);
    },
    evenCards(): Card[] {
      return this.cards.filter((_, index: number) => index % 2 === 0);
    },
  },
  methods: {
    addTech(): void {
      if (this.newTech) {
        this.favoriteTechs.push(this.newTech);
        this.newTech = '';
      }
    },
  },
});
</script>


<style>

.columns {
  display: flex;
  justify-content: space-around;
}

.column {
  flex: 1;
  padding: 0 1rem;
}

.card-image {
  width: 100%;
  height: auto;
  display: block;
}

</style>
  