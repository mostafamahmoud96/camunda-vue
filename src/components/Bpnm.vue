<template>
  <BpmnModeler ref='modeler' :diagramXML="propXmlData" propertiesPanel></BpmnModeler>
</template>


<style lang="css">
@import "~vue-bpmn-modeler/lib/vue-bpmn-modeler.css";
</style>

<script>
  export default {
    // name: "BpmnModeler",
    props: {
      diagramXML: String
    },
    watch: {
      diagramXML(val) {
        this.openDiagram(val)
      }
    },
    data(){
      propXmlData:""
    },
    // see source code for detail
    mounted() {
    },
    methods: {
      openDiagram(xml) {
        if (xml) {
          this.modeler.importXML(xml, function() {
            // if (err) {
            //   console.error(err);
            // } else {
            // }
          });
          this.xmlData = xml;
        } else {
          this.modeler.createDiagram();
          let _self = this;
          setTimeout(() => {
        
            let modelerCanvas = _self.modeler.get("canvas");
            let rootElement = modelerCanvas.getRootElement();
            let modeling = _self.modeler.get("modeling");
            // modeling.updateProperties(rootElement, {
            //   // isExecutable: true
            // });
            // set StartEvent name 'start' and EndEvent name 'end'
            rootElement.children.forEach(n => {
              if (n.type === 'bpmn:StartEvent') {
                modeling.updateProperties(n, {
                  name: 'start',
                });
              } else if (n.type === 'bpmn:EndEvent') {
                modeling.updateProperties(n, {
                  name: 'end',
                });
              }
            })
          });
        }
      }

    }
  };
</script>
<script>

    // import Modeler from 'bpmn-js/lib/Modeler';
    // import diagramXML from '../resources/newDiagram.bpmn';

    
    // export default {
        // methods:{
        //     async openDiagram(bpmnXML) {
        //         const modeler = new Modeler({ container: '#canvas' });

        //         try {
        //             await modeler.importXML(bpmnXML);
        //         } catch (err) {
        //             // console.error(err);
        //         }
        //     },
        //     // createNewDiagram() {
        //     //     openDiagram(diagramXML);
        //     // },
        // },
        // mounted() {
        //     this.openDiagram(bpmnXML);
        // }
    // }
</script>