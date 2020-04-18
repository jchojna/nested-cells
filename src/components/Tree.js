import React from "react";
import classNames from "classnames";
import "../scss/Tree.scss";

const Tree = (props) => {
  const {parentName, parentId, childNodes, renderCell, renderButton} = props;

  const treeClass = classNames("Tree", {
    "Tree--main": parentId === "main",
    "Tree--child": parentId !== "main",
    "Tree--empty": childNodes.length === 0,
  });
  const headingClass = classNames("Tree__heading", {
    "Tree__heading--main": parentId === "main",
    "Tree__heading--child": parentId !== "main",
  });

  return (
    <main className={treeClass}>
      <h2 className={headingClass}>{parentName}</h2>
      {childNodes.map(({id}) => {
        return renderCell(id, parentId);
      })}
      {renderButton("add", parentId)}
    </main>
  );
};
export default Tree;
