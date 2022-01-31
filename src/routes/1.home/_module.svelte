<script>
    import { isActive, node } from '@roxi/routify'
    export let pages
    $: liveUrl = index    => pages && pages[index]?.router?.url.external()
    const sptitle = (name)=>{
        console.log(name);
        let sp = name.split('.');
        console.log (sp);
        if(isFinite(sp[0]) && sp[1]){
             return sp[1];
        } else {
            return name;
        }
            return name;
    }
</script>

<nav class="container">
    <ul>
        {#each $node.pages as childNode, index}
            <li class:isActive={$isActive(childNode.path)}>                
                <a href={liveUrl(index) || childNode.path}
                    >{childNode.meta.title || sptitle(childNode.name)}</a>
            </li>
        {/each}
    </ul>
</nav>
<div class="container">
<slot></slot>
</div>
<style>
    .container {
        padding: 0 40px;
    }
    .isActive a {text-decoration: underline;}
</style>