import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  searchGroup: {
    padding: 16,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    color: "#7E7B7B",
  },
  searchControl: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginTop: 4,
  },
  searchButton: {
    backgroundColor: "#34967C",
    padding: 12,
    borderRadius: 8,
    marginLeft: 8,
  },
  filterGroup: {
    flexDirection: "row",
    gap: 16,
    paddingHorizontal: 16,
  },
  filterContainer: {
    alignItems: "center",
    width: 60,
  },
  listingContainer: {
    padding: 16,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  showMoreButton: {
    padding: 12,
    backgroundColor: "#34967C",
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: "#fff",
  },
});

export { styles };
