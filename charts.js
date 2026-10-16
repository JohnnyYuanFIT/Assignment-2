const options = { actions: false, config: { background: null } };

vegaEmbed("#waffle_adults", "charts/chart 1 waffle_adults.vg.json", { actions: false }).catch(console.error);
vegaEmbed("#streamgraph", "charts/chart 2 streamgraph.vg.json", { actions: false }).catch(console.error);
vegaEmbed("#choropleth", "charts/chart 3 choropleth.vg.json", { actions: false }).catch(console.error);
vegaEmbed("#bump", "charts/chart 4 bump.vg.json", { actions: false }).catch(console.error);
vegaEmbed("#heatmap", "charts/chart 5 heatmap.vg.json", { actions: false }).catch(console.error);
vegaEmbed("#treemap", "charts/chart 6 treemap.vg.json", { actions: false }).catch(console.error);
vegaEmbed("#beeswarm", "charts/chart 7 beeswarm.vg.json", { actions: false }).catch(console.error);
vegaEmbed("#symbol_map", "charts/chart 8 symbol map.vg.json", { actions: false }).catch(console.error);
vegaEmbed("#flow_map", "charts/chart 9 flow map.vg.json", { actions: false }).catch(console.error);