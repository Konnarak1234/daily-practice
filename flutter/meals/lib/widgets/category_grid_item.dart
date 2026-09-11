import 'package:flutter/material.dart';
import 'package:meals/models/category.dart';

class CategoryGridItem extends StatelessWidget {
  const CategoryGridItem({super.key, required this.category, required this.onSelectedCategory});

  final Category category;
  final void Function(BuildContext context) onSelectedCategory;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        onSelectedCategory(context);
      },
      splashColor: Theme.of(context).colorScheme.primary,
      borderRadius: BorderRadius.circular(16),
      child: Container(
        padding: EdgeInsets.all(16),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(16),
          gradient: LinearGradient(
            colors: [
              category.color.withAlpha(125),
              category.color.withAlpha(220),
            ],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
        ),
        child: Text(
          category.title,
          style: Theme.of(context).textTheme.titleLarge!.copyWith(
            color: Theme.of(context).colorScheme.onSurface,
          ),
        ),
      ),
    );
  }
}
