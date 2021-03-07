import React from "react";
import ShopData from "./ShopData";
import CollectionPreview from "../../Component/CollectionPreview/CollectionPreview";
import { Link } from "react-router-dom";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Collection: ShopData,
    };
  }

  render() {
    const Collection = this.state.Collection;
    return (
      <div>
        {Collection.map(({ id, ...otherCollectionprops }) => (
          <CollectionPreview key={id} {...otherCollectionprops} />
        ))}
        <Link to="/">home</Link>
      </div>
    );
  }
}

export default ShopPage;
