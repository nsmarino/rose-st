<script>
    import { useQuery } from '@sanity/svelte-loader';
    export let data
	const q = useQuery(data);
    import { fly } from "svelte/transition"

	$: ({ data: posts } = $q);

    let filter = "";
	$: filtered = filter ? posts.filter(i=> i[filter]) : posts
</script>
    <main in:fly={{y: 10}}>
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
                            {#key filter}
                                <a class="table-row" href="{post.url}" in:fly={{y: 20}}>
                                    {#if post.acq}<span class="acq-note">{post.acq}</span>{/if}
                                    <span>{post.title}</span>
                                    <span>{post.industry}</span>
                                </a>
                            {/key}
                        {:else}
                            {#key filter}
                            <div class="table-row"in:fly={{y: 20}}>
                                {#if post.acq}<span class="acq-note">{post.acq}</span>{/if}
                                <span>{post.title}</span>
                                <span>{post.industry}</span>
                            </div>
                            {/key}
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
        justify-content: space-between;
        margin: 0 24px;
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
    .portfolio-table {
        margin: 20px;
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
        color: unset;
        text-decoration: none;
        font-family: 'Neue Machina';
        font-weight: 300;
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
            margin-left: 24px;
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
            align-items: center;
            gap: 120px;
        }
        nav button::before {
            content: "";
            height: 24px;
            aspect-ratio: 1 / 1;
            background: black;
            border-radius: 100%;
            position: absolute;
            left: 0;
            top: -4px;
            transform: translateX(-240%);
            opacity: 0;
        }

        nav button.active::before {
            transform: translateX(-200%);
            height: 24px;
            top: -6px;
        }

        nav div {
            display: block;
            font-size: 20px;
        }

        nav button {
            font-size: 24px;
        }

        .portfolio-table {
            padding-left: 33%;
            position: relative;
        }
        .table-header {
            display: flex;
            margin: 40px 0;
        }
        .table-row {
            color: #969696;
            transition: color 0.4s;
            flex-direction: row;
            position: relative;
            margin-top: 0;
        }
        
        .table-row > :last-child {
            color: unset;
        }
        .table-row:hover {
            color: #414141;
            transition: color 0.4s;
        }
        .table-row .acq-note {
            display: block;
            position: absolute;
            left: -60px;
            opacity: 0;
            transform: translateX(-100%) translateY(20%);
            transition: all 0.4s;
            font-size: 16px;
        }
        .table-row:hover .acq-note {
            display: block;
            position: absolute;
            left: -60px;
            opacity: 1;
            transform: translateX(-100%) translateY(0);
            transition: all 0.4s;
        }
        .table-row::before {
            content: "";
            height: 24px;
            aspect-ratio: 1 / 1;
            background: black;
            border-radius: 100%;
            position: absolute;
            left: 0;
            top: 8px;
            transform: translateX(-240%);
            opacity: 0;
            transition: all 0.4s;
        }

        .table-row:hover::before {
            transform: translateX(-200%);
            height: 24px;
            opacity: 1;
            transition: all 0.4s;
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