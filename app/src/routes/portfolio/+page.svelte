<script>
    import { useQuery } from '@sanity/svelte-loader';

    export let data
	const q = useQuery(data);
	$: ({ data: posts } = $q);

    let filtered = [];
	$: filtered = filtered.length > 0 ? filtered : posts
    $: console.log(filtered)
</script>
<main>
    <h2>Investments</h2>
    <nav>
        <div>Filter:</div>
        <button on:click={()=>(filtered = [])}>All</button>
        <button on:click={()=>filtered = posts.filter(i=> i.software)}>Software</button>
        <button on:click={()=>filtered = posts.filter(i=> i.consumer)}>Consumer</button>
    </nav>
    <div class="portfolio-table">
        <div class="table-header">
            <span>Name</span>
            <span>Industry</span>
        </div>
        {#each filtered as post}
            {#if post.url}
                <a class="table-row" href="{post.url}">
                    {#if post.acq}<span class="acq-note">{post.acq}</span>{/if}
                    <span>{post.title}</span>
                    <span>{post.industry}</span>
                </a> 
            {:else}
                <div class="table-row">
                    {#if post.acq}<span class="acq-note">{post.acq}</span>{/if}
                    <span>{post.title}</span>
                    <span>{post.industry}</span>
                </div>
            {/if}     
        {/each}
    </div>
</main>
<style>

    h2 {
        font-family: 'Neue Machina';
		font-weight: 300;
		font-size: 40px;
		text-transform: uppercase;
        text-align: center;
    }
    nav {
        text-transform: uppercase;
        font-weight: 400;
        display: flex;
        gap: 60px;
        justify-content: space-between;
    }
    nav button {
        all: unset;
        outline: revert;
    }

    .table-header {
        display: none;
    }
    .table-header * {
        flex-basis: 100%;
        text-transform: uppercase;
        font-size: 14px;
    }

    .table-row {
        display: flex;
        flex-direction: column;
        margin-top: 24px;
    }
    .table-row * {
        flex-basis: 100%;
        text-transform: uppercase;
        font-size: 24px;
        line-height: 48px;

    }
    .table-row > :last-child {
        color: #969696;
    }
    nav div {
        display: none;
    }
    .acq-note {
        display: none;
    }
    @media (min-width: 575px) {
        h2 {
            text-align: left;
        }

        main {
            min-height: 0;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: max-content max-content minmax(0,1fr);
            flex-basis: 100%;
        }
        .portfolio-table {
            overflow-y: scroll;
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none;  /* Internet Explorer 10+ */
            padding: 24px;
        }

        .portfolio-table::-webkit-scrollbar { /* WebKit */
            width: 0;
            height: 0;
        }
        nav {
            justify-content: start;
            min-height: fit-content;
        }
        nav div {
            display: block;
        }
        .portfolio-table {
            margin-left: 33%;
            position: relative;
        }
        .table-header {
            display: flex;
            margin-top: 60px;
        }
        .table-row {
            color: #969696;
            flex-direction: row;
            position: relative;
        }
        
        .table-row > :last-child {
            color: unset;
        }
        .table-row:hover {
            color: #414141;
        }
        .table-row:hover .acq-note {
            display: block;
            position: absolute;
            left: -60px;

            transform: translateX(-100%);
        }
        main {
            position: relative;
        }
        main::after {
            content: '';
            width: 100%;
            height: 30%;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            pointer-events: none;
            background: linear-gradient(179.94deg, rgba(255, 255, 255, 0) 39.38%, #FFFFFF 99.95%);
        }
    }

</style>