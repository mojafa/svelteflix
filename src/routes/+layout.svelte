<script>
    import '../styles.css';
    import logo from "$lib/images/logo.svg";
    import tmdb from '$lib/images/tmdb.svg';

</script>
<nav>
    <a href="/"><img alt="svelteflix" src={logo}/></a>
    <div class="links">
        <a href="/search">Search</a>
        <a href="/watchlist">Watchlist</a>
        <a href="/login">Login</a>
    </div>
</nav>
<main>
    <slot/>
</main>
<footer>
    Data provided by <a href="https://www.themoviedb.org/"><img alt="The Movie DB" src={tmdb} /></a>
</footer>
<style>
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3rem;
        width: 100%;
        max-width: var(--column);
        padding: 0 var(--side);
        color: var(--accent);

    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        height: 1rem;
    }
    .links{
        display: flex;
        gap: 1rem;  
    }
    footer{
        display: flex;
        height: 5rem;
        align-items: center ;
    }
</style>