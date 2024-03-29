<script></script>
<main>
    <h2>Investments</h2>
    <nav>
        <div>Filter:</div>
        <button>All</button>
        <button>Software</button>
        <button>Consumer</button>
    </nav>
    <div class="portfolio-table">
        <div class="table-header">
            <span>Name</span>
            <span>Industry</span>
        </div>
        <div class="table-row">
            <span>Golde</span>
            <span>Health & Wellness</span>
        </div>
        <div class="table-row">
            <span>Golde</span>
            <span>Health & Wellness</span>
        </div>
        <div class="table-row">
            <span>Golde</span>
            <span>Health & Wellness</span>
        </div>
        <div class="table-row">
            <span>Golde</span>
            <span>Health & Wellness</span>
        </div>
        <div class="table-row">
            <span>Golde</span>
            <span>Health & Wellness</span>
        </div>
        <div class="table-row">
            <span>Golde</span>
            <span>Health & Wellness</span>
        </div>
        <div class="table-row">
            <span>Golde</span>
            <span>Health & Wellness</span>
        </div>
        <div class="table-row">
            <span>Golde</span>
            <span>Health & Wellness</span>
        </div>
        <div class="table-row">
            <span>Golde</span>
            <span>Health & Wellness</span>
        </div>
    </div>
</main>
<style>
    main {
        flex-basis: 100%;
        overflow-y: scroll;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        padding: 24px;
    }

    main::-webkit-scrollbar { /* WebKit */
        width: 0;
        height: 0;
    }
    h2 {
        font-family: 'Neue Machina';
		font-weight: 300;
		font-size: 40px;
		text-transform: uppercase;
    }
    nav {
        text-transform: uppercase;
        font-weight: 400;
        display: flex;
        gap: 60px;
    }
    nav button {
        all: unset;
    }
    .portfolio-table {
        margin-left: 33%;
        position: relative;
    }
    .table-header {
        display: flex;
        margin-bottom: 40px;
    }
    .table-header * {
        flex-basis: 100%;
        text-transform: uppercase;
        font-size: 14px;
    }

    .table-row {
        display: flex;
        color: #969696;
    }
    .table-row:hover {
        color: #414141;
    }
    .table-row * {
        flex-basis: 100%;
        text-transform: uppercase;
        font-size: 24px;
        line-height: 48px;
    }
    .portfolio-table::after {
        content: '';
        width: 100%;
        height: 50%;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        pointer-events: none;
        background: linear-gradient(179.94deg, rgba(255, 255, 255, 0) 39.38%, #FFFFFF 99.95%);

    }

</style>