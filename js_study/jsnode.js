function getFirstChildNode(node){
	if(!node){return;}
    node = node.firstChild;
    while(node && node.nodeType !== 1){ // element
        node = node.nextSibling;
    }
    return node;
}


