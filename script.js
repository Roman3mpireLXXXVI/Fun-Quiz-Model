$(document).ready(function() {
    // Change this to your desired correct option (0-indexed)
    const correctAnswerIndex = 2; 

    // Disable other options and show feedback
    $('.option').click(function() {
        const selectedOption = $(this);
        const selectedOptionIndex = $('.option').index(selectedOption);

        // Disable all options
        $('.option').prop('disabled', true);
        //Validation Check
        if (selectedOptionIndex === correctAnswerIndex) {
            $('.feedback').css('color', 'green').text('You have survived!');
        } else {
            $('.feedback').css('color', 'red').text('You are DEAD!');
        }
    });
});
