import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:meals/data/dummy_data.dart';
import 'package:meals/providers/favorites_provider.dart';
import 'package:meals/screens/categories.dart';
import 'package:meals/screens/filters.dart';
import 'package:meals/screens/meals.dart';
import 'package:meals/widgets/main_drawer.dart';

const kInitailFilter = {
    Filter.glutenFree : false,
    Filter.lactoseFree : false,
    Filter.vegetarian : false,
    Filter.vegan : false,
};


class TabsScreen extends ConsumerStatefulWidget {
  const TabsScreen({super.key});

  @override
  ConsumerState<TabsScreen> createState() => _TabsScreenState();
}

class _TabsScreenState extends ConsumerState<TabsScreen> {
  int _selectedPageIndex = 0;
  var _selectFilter = kInitailFilter;

  void _selectPage(int index) {
    setState(() {
      _selectedPageIndex = index;
    });
  }

  void _setScreen(String identifier) async {
    Navigator.of(context).pop();
    if (identifier == 'filters') {
      final result = await Navigator.of(
        context,
      ).push<Map<Filter, bool>>(MaterialPageRoute(builder: (ctx) => FiltersScreen(currentFilter: _selectFilter,)));

      setState(() {
        _selectFilter = result ?? kInitailFilter;
      });
    }  
  }

  @override
  void dispose() {
    print('hello world');
    super.dispose();
  }

  @override
  Widget build(context) {
    final availableMeal = dummyMeals.where((meal) {
      if(_selectFilter[Filter.glutenFree]! && !meal.isGlutenFree){
        return false;
      } else if(_selectFilter[Filter.lactoseFree]! && !meal.isLactoseFree){
        return false;
      } else if(_selectFilter[Filter.vegetarian]! && !meal.isVegetarian){
        return false;
      } else if(_selectFilter[Filter.vegan]! && !meal.isVegan){
        return false;
      }

      return true;

    }).toList();

    Widget activePage = CategoriesScreen(
      availableMeal: availableMeal,
    );
    var pageTitle = 'Categories';
    if (_selectedPageIndex == 1) {
      final favoriteMeals = ref.watch(favoriteMealsProvider);
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
