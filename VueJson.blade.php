@extends('layouts.main')
@section('content')



<div id="app" v-cloak>
    <input v-model="term" type="search">
    <button @click="search">Search</button>
    <p/>

    <div v-for="result in results" class="result">
        <img :src="result.artworkUrl100">
        <b>Artist:</b> @{{result.artistName}}<br/>
        <b>Track:</b> @{{result.trackName}}<br/>
        <b>Released:</b> @{{result.releaseDate | formatDate}}
        <br clear="left">
    </div>

    <div v-if="noResults">
        Sorry, but no results were found. I blame Apple.
    </div>

    <div v-if="searching">
        <i>Searching...</i>
    </div>

</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js"></script>
@endsection
