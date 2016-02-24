function ToggleLanguage(language) {
    var elements = document.querySelectorAll('.translate')
    for (index in elements) {
        if (elements[index].classList && !elements[index].classList.contains('hidden')) {
            elements[index].classList.add('hidden');
        }
    }

    var elements = document.querySelectorAll('.translate.' + language)
    for (index in elements) {
        if (elements[index].classList) {
            elements[index].classList.remove('hidden');
        }
    }
}
