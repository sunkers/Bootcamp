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
                    <div class="text-h6">{{ card.title }}</div>
                    <div>{{ card.description }}</div>
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
                    <div class="text-h6">{{ card.title }}</div>
                    <div>{{ card.description }}</div>
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
export default {
    name: 'MyQuasarProject',
    data() {
        return {
            newTech: '',
            favoriteTechs: ['TypeScript', 'HTML', 'HTML', 'sss'],
            cards: [
                { title: 'Javascript', description: 'Java c trop bien'},
                { title: 'TypeScript', description: 'blablabla'},
                { title: 'VueJS', description: 'blablabla'},
                { title: 'Quasar', description: 'blablabla'},
                { title: 'NodeJS', description: 'blablabla'},
                { title: 'Express', description: 'blablabla'},
                { title: 'MongoDB', description: 'blablabla'},
                { title: 'Mongoose', description: 'blablabla'},
                { title: 'Git', description: 'blablabla'},
                { title: 'Github', description: 'blablabla'},
                { title: 'Docker', description: 'blablabla'},
                { title: 'Kubernetes', description: 'blablabla'},
                { title: 'Jenkins', description: 'blablabla'},
                { title: 'Jira', description: 'blablabla'},
                { title: 'Confluence', description: 'blablabla'},
                { title: 'AWS', description: 'blablabla'},
                { title: 'Azure', description: 'blablabla'},
                { title: 'Google Cloud', description: 'blablabla'},
                { title: 'Heroku', description: 'blablabla'},
                { title: 'Netlify', description: 'blablabla'},
                { title: 'Vercel', description: 'blablabla'},
                { title: 'Digital Ocean', description: 'blablabla'},
                { title: 'Nginx', description: 'blablabla'},
                { title: 'Apache', description: 'blablabla'},
            ],
        };
    },
    computed: {
        oddCards() {
            return this.cards.filter((_, index) => index % 2 !== 0);
        },
        evenCards() {
            return this.cards.filter((_, index) => index % 2 === 0);
        },
    },

    methods: {
        addTech() {
            if (this.newTech) {
                this.favoriteTechs.push(this.newTech);
                this.newTech = '';
            }
        },
    },
}

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
  