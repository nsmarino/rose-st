<script>
    import { useQuery } from '@sanity/svelte-loader';
    export let data
	const postsQ = useQuery(data.postsData);
	const catQ = useQuery(data.catData);
	const subcatQ = useQuery(data.subcatData);
    import { fly } from "svelte/transition"

	$: ({ data: posts } = $postsQ);
	$: ({ data: categories } = $catQ);
	$: ({ data: subcategories } = $subcatQ);

    let filter = "";
    let subfilter = ""
	$: filtered = filter ? posts.filter(i=> i.category.title===filter) : posts
	$: subfiltered = subfilter ? filtered.filter(i=>i.subcategories.map(subcat=>subcat.title).includes(subfilter)) : filtered
    $: subfilters = filter ? [...new Set(filtered.map(post => post.subcategories).flat().map(subcat => subcat.title))] : []
    const clearFilter = () => {
        filter = ""
        subfilter = ""
    }
    const setFilter = (title) => {
        filter = title
        subfilter = ""
    }

</script>
    <main in:fly={{y: 10, delay: 400}}>
        <h2>Investments</h2>
        <nav>
            <div>Filter:</div>

            <button class:active={filter===""} on:click={clearFilter}><span class="filter-bubble"></span>All</button>

            {#each categories as cat}
                <button class:active={filter===cat.title} on:click={()=>setFilter(cat.title)}><span class="filter-bubble"></span>{cat.title}</button>
            {/each}
            {#if filter !== "" && subfilters !== []}
                <div class="subfilter-nav">
                    <button class:active={subfilter===""} on:click={() => subfilter = ""}>All</button>
                    {#each subfilters as subf}
                        <button class:active={subfilter===subf} on:click={()=> subfilter = subf}>{subf}</button>
                    {/each}
                </div>            
            {/if}
        </nav>

            <div class="portfolio-table">
                <div class="table-header">
                    <span>Name</span>
                    <span>Industry</span>
                </div>
                
                    {#each subfiltered as post}
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
        margin: 0 24px 60px;
        position: relative;
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
    nav button.active, nav button:hover {
        color: #000000;
        transition: color 0.4s ease-out;
        position: relative;
    }
    nav button .filter-bubble {
        content: "";
        height: 12px;
        aspect-ratio: 1 / 1;
        background: black;
        border-radius: 100%;
        margin-right: 9px;
        display: inline-block;
        transform: scale(0.01);
        transform-origin: center;
        opacity: 0;
    }
    .subfilter-nav {
        flex-basis: 100%;
        display: flex;
        gap: 20px 80px;
        flex-wrap: nowrap;
        overflow: scroll;
        width: 100%;
        position: absolute;
        bottom: 0;
        transform: translateY(calc(100% + 20px));
    }
    .subfilter-nav button {
        font-size: 14px;
        white-space: nowrap;
    }
    nav button.active .filter-bubble {
        content: "";
        aspect-ratio: 1 / 1;
        background: black;
        border-radius: 100%;
        display: inline-block;
        opacity: 1;
        transform: scale(1);
        transform-origin: center;
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
            gap: 40px 120px;
            flex-wrap: wrap;
            margin: 0 24px;

        }

        nav button .filter-bubble {
            height: 18px;
        }
        nav div {
            display: block;
            font-size: 20px;
            width: 80px;
        }

        nav button {
            font-size: 24px;
        }

        .subfilter-nav {
            overflow: auto;
            margin-left: 227px;
            z-index: 1;
            width: unset;
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
            height: 30px;
            aspect-ratio: 1 / 1;
            background: black;
            border-radius: 100%;
            position: absolute;
            left: 0;
            transform: translateX(-45px) translateY(6px) scale(0.01);
            opacity: 0;
            transition: all 0.4s;
        }

        .table-row:hover::before {
            transform: translateX(-45px) translateY(6px) scale(1);
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