<script lang="ts">
import {media} from '$lib/media';
import type {MovieDetails} from '$lib/types';
export let movie: MovieDetails;
$: images = movie.images.backdrops.map((image) => media(image.file_path, 'w300'));
</script>

<a href="/movie/{movie.id}">
    <img alt={movie.title} src={media(movie.poster_path, 'w300')} />