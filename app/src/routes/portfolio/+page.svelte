<script>
    import { useQuery } from '@sanity/svelte-loader';
    import {fade } from "svelte/transition"
    export let data
	const q = useQuery(data);
	$: ({ data: posts } = $q);

    let filter = "";
	$: filtered = filter ? posts.filter(i=> i[filter]) : posts
</script>
<main in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
    <h2>Investments</h2>
    <nav>
        <div>Filter:</div>
        <button class:active={filter===""} on:click={()=>(filter = "")}>All</button>
        <button class:active={filter==="software"} on:click={()=>filter = "software"}>Software</button>
        <button class:active={filter==="consumer"} on:click={()=>filter = "consumer"}>Consumer</button>
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
        cursor: pointer;
        color: #ABABAB;
        transition: color 0.4s ease-out;
        font-size: 16px;
        line-height: 16px;
    }
    nav button.active {
        color: #000000;
        transition: color 0.4s ease-out;
        position: relative;
    }
    nav button::before {
        content: "";
        height: 14px;
        aspect-ratio: 1 / 1;
        background: black;
        border-radius: 100%;
        position: absolute;
        left: 0;
        top: 0%;
        transform: translateX(-180%);
        opacity: 0;
    }
    nav button.active::before {
        content: "";
        height: 14px;
        aspect-ratio: 1 / 1;
        background: black;
        border-radius: 100%;
        position: absolute;
        left: 0;
        top: 0%;
        transform: translateX(-140%);
        opacity: 1;
        transition: all 0.2s linear;
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