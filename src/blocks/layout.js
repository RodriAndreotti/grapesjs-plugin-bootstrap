export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  const { blocks, category } = config;
  const { layout } = category;
  const addBlock = (name = '', attr = {}) => (blocks.indexOf(name) >= 0) ? bm.add(name, attr) : null;

  // Container
  addBlock('container', {
    label: 'Container',
    category: layout,
    content: `
      <div class="container" data-gjs-custom-name="Container"></div>
    `
  })

  // Column
  addBlock('column', {
    label: 'Column',
    category: layout,
    content: `
      <div class="col-md-12"></div>
    `
  })

  // Columns 2
  addBlock('columns-2', {
    label: '2 Columns',
    category: layout,
    content: `
      <div class="row">
        <div class="col-md-6"></div>
        <div class="col-md-6"></div>
      </div>
    `
  })

  // Columns 3
  addBlock('columns-3', {
    label: '3 Columns',
    category: layout,
    content: `
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
      </div>
    `
  })

  // Columns 4
  addBlock('columns-4', {
    label: '4 Columns',
    category: layout,
    content: `
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>
      </div>
    `
  })

  // Columns 4/8
  addBlock("columns-4-8", {
    label: "2 Columns 4/8",
    category: layout,
    content: `
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-8"></div>
      </div>
    `
  });

  // Columns 8/4
  addBlock("columns-8-4", {
    label: "2 Columns 8/4",
    category: layout,
    content: `
      <div class="row">
        <div class="col-md-8"></div>
        <div class="col-md-4"></div>
      </div>
    `
  });

  // Row
  addBlock("row", {
    label: "Row",
    category: layout,
    content: '<div class="row"></div>'
  });
}
