

<script>
import { createApp } from 'vue'
const formulaireConnexion = createApp({
        data() {
          return {
            nameConnexion: '',
            emailConnexion: '',
            passwordConnexion: ''

          }
        }
      })
</script>


<template>
  <h1 class="start-50">Formulaire de connexion</h1>
  <form class="mb-3 start-50" name="formulaire">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
    <input type="text" class="form-control w-25" placeholder="your name">    
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control w-25" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Password</label>
    <input  type="password" class="form-control w-25">
  </div>
  <div class="mb-3">
    <p class="btn btn-outline-primary"><a href="http://localhost:5173/Login">Aller sur la page des chats</a></p>
  </div>
  <p class="">Already connected <a href="http://localhost:5173/Login">sign in?</a></p>
  </form>
</template>
