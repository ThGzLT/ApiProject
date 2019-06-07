@extends('layouts.main')
@section('content')


<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js"></script>

<div id="app1" v-cloak>
 <input v-model="term" type="search">
 <button @click="search">Search</button>
 <p/>
    <div v-for="post in posts" class="post">
      <p><strong>@{{post.title}}</strong></p>
      <p>@{{post.body}}</p
      <br clear="left">
    {{--  <input v-model="post">  --}}

<td>@{{post}}</td>




  @endsection

