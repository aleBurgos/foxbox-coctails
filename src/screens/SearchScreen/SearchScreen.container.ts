import {connect} from "react-redux";
import { selectCocktails} from "../../state/modules/cocktails";
import { SearchScreen } from "./SearchScreen";


function mapStateToProps(state: any) {
    return selectCocktails(state);
}

export default connect(
    mapStateToProps, {}
)(SearchScreen);

