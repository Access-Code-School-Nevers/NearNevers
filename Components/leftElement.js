export default class Toolbar extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = { isSearchActive: false, searchValue: '' };
    }
    onSearchPressed = () => {
        this.setState({ isSearchActive: true });
    }
    onSearchTextChanged = (searchValue) => {
        this.setState({ searchValue });
    }
    onSearchClearPressed = () => {
        this.onSearchTextChanged('');
    }
    onSearchClosed = () => {
        this.setState({ isSearchActive: false, searchValue: '' });
    }
    render() {
        const { isSearchActive, searchValue } = this.state;

        return (
            <View style={[styles.container, isSearchActive && { backgroundColor: 'grey' }]}>
                <View style={styles.statusBar} />
                <View style={styles.toolbarContainer}>
                    <LeftElement
                        isSearchActive={isSearchActive}
                        onSearchClose={this.onSearchClosed}
                    />
                    <CenterElement
                        title="Animation"
                        isSearchActive={isSearchActive}
                        onSearchTextChange={this.onSearchTextChanged}
                        searchValue={searchValue}
                    />
                    <RightElement
                        isSearchActive={isSearchActive}
                        onSearchPress={this.onSearchPressed}
                        searchValue={searchValue}
                        onSearchClear={this.onSearchClearPressed}
                    />
                </View>
            </View>
        );
    }
}
