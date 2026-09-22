import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:meals/data/dummy_data.dart';
import 'package:meals/providers/favorites_provider.dart';
import 'package:meals/screens/categories.dart';
import 'package:meals/screens/filters.dart';
import 'package:meals/screens/meals.dart';
import 'package:meals/widgets/main_drawer.dart';
import 'package:meals/providers/filters_provider.dart';



class TabsScreen extends ConsumerStatefulWidget {
  const TabsScreen({super.key});

  @override
  ConsumerState<TabsScreen> createState() => _TabsScreenState();
}

class _TabsScreenState extends ConsumerState<TabsScreen> {
  int _selectedPageIndex = 0;

  void _selectPage(int index) {
    setState(() {
      _selectedPageIndex = index;
    });
  }

  void _setScreen(String identifier) {
    Navigator.of(context).pop();
    if (identifier == 'filters') {
      Navigator.of(
        context,
      ).push<Map<Filter, bool>>(MaterialPageRoute(builder: (ctx) => FiltersScreen()));
    }  
  }

  @override
  void dispose() {
    print('hello world');
    super.dispose();
  }

  @override
  Widget build(context) {
    final favoriteMeals = ref.watch(favoriteMealsProvider);
    final activeFilters = ref.watch(filtersProvider);

    final availableMeal = dummyMeals.where((meal) {
      if(activeFilters[Filter.glutenFree]! && !meal.isGlutenFree){
        return false;
      } else if(activeFilters[Filter.lactoseFree]! && !meal.isLactoseFree){
        return false;
      } else if(activeFilters[Filter.vegetarian]! && !meal.isVegetarian){
        return false;
      } else if(activeFilters[Filter.vegan]! && !meal.isVegan){
        return false;
      }

      return true;

    }).toList();

    Widget activePage = CategoriesScreen(
      availableMeal: availableMeal,
    );
    var pageTitle = 'Categories';
    if (_selectedPageIndex == 1) {
      activePage = MealsScreen(
        meals: favoriteMeals,
      );
      pageTitle = 'Your Favorites';
    }
    return Scaffold(
      appBar: AppBar(title: Text(pageTitle)),
      drawer: MainDrawer(onSelectScreen: _setScreen),
      body: activePage,
      bottomNavigationBar: BottomNavigationBar(
        onTap: _selectPage,
        currentIndex: _selectedPageIndex,
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.set_meal),
            label: 'Categories',
          ),
          BottomNavigationBarItem(icon: Icon(Icons.star), label: 'Favorites'),
        ],
      ),
    );
  }
}
