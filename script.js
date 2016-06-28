$(function() {
            var availableStates = [
                                   "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia",
                                   "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
                                   "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
                                   "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
                                   "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
                                   "Washington", "West Virginia", "Wisconsin", "Wyoming"
                                    ];
                                $( "#states" ).autocomplete({
                                   source: availableStates,
                                   autoFocus:true
                                });
});


window.products = {
        1: {
            id : 1,
            order: 1,
            'title' : 'product title 1',
            'price' : 'staring at $500',
            'desc' : 'cras a ante eget dui dignissim molestie nec non lectus. donec id sapien tristique, iaculis odio a, gravida ligula. in hac habitasse platea dictumst. praesent non lacus elit. sed convallis erat sem, ac egestas ipsum tempor in. sed consectetur ex at dolor ullamcorper vulputate. ut tristique ipsum velit, eget pretium ipsum dictum vel. aenean ut tempus elit, non facilisis odio. vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. quisque semper ante ac pellentesque vestibulum. cras a massa turpis. pellentesque congue leo velit, non porta dui euismod nec.<br> <br> mauris sed enim risus. quisque mollis justo quis commodo euismod. nullam non massa in lorem cursus sagittis. sed laoreet felis mauris, a eleifend sapien molestie eget. duis at volutpat elit. phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. phasellus venenatis ultrices justo nec venenatis.<br><br>'
                +'<ul>'
                        + '     <li>non porta dui euismod nec</li>'
                        + '     <li>ut tristique ipsum velit</li>'
                                        + '     <li>quisque mollis justo</li>'
                +'</ul>',
            'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                            'src'        : 'material/000010885.jpg'
        },
        2: {
            id : 2,
            order: 2,
            'title' : 'product title 2',
            'price' : 'staring at $1900',
            'desc' : 'cras a ante eget dui dignissim molestie nec non lectus. donec id sapien tristique, iaculis odio a, gravida ligula. in hac habitasse platea dictumst. praesent non lacus elit. sed convallis erat sem, ac egestas ipsum tempor in. sed consectetur ex at dolor ullamcorper vulputate. ut tristique ipsum velit, eget pretium ipsum dictum vel. aenean ut tempus elit, non facilisis odio. vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. quisque semper ante ac pellentesque vestibulum. cras a massa turpis. pellentesque congue leo velit, non porta dui euismod nec.<br> <br> mauris sed enim risus. quisque mollis justo quis commodo euismod. nullam non massa in lorem cursus sagittis. sed laoreet felis mauris, a eleifend sapien molestie eget. duis at volutpat elit. phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. phasellus venenatis ultrices justo nec venenatis.',
            'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                            'src'        : 'material/ff_x20_008.jpg'
        },
        3: {
            id : 3,
            order: 3,
            'title' : 'product title 3',
            'price' : 'staring at $2730',
            'desc' : 'cras a ante eget dui dignissim molestie nec non lectus. donec id sapien tristique, iaculis odio a, gravida ligula. in hac habitasse platea dictumst. praesent non lacus elit. sed convallis erat sem, ac egestas ipsum tempor in. sed consectetur ex at dolor ullamcorper vulputate. ut tristique ipsum velit, eget pretium ipsum dictum vel. aenean ut tempus elit, non facilisis odio. vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. quisque semper ante ac pellentesque vestibulum. cras a massa turpis. pellentesque congue leo velit, non porta dui euismod nec.<br> <br> mauris sed enim risus. quisque mollis justo quis commodo euismod. nullam non massa in lorem cursus sagittis. sed laoreet felis mauris, a eleifend sapien molestie eget. duis at volutpat elit. phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. phasellus venenatis ultrices justo nec venenatis.',
            'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                            'src'        : 'material/sample1.jpg'
        },
        4: {
            id : 4,
            order: 4,
            'title' : 'product title 4',
            'price' : 'staring at $731',
            'desc' : 'cras a ante eget dui dignissim molestie nec non lectus. donec id sapien tristique, iaculis odio a, gravida ligula. in hac habitasse platea dictumst. praesent non lacus elit. sed convallis erat sem, ac egestas ipsum tempor in. sed consectetur ex at dolor ullamcorper vulputate. ut tristique ipsum velit, eget pretium ipsum dictum vel. aenean ut tempus elit, non facilisis odio. vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. quisque semper ante ac pellentesque vestibulum. cras a massa turpis. pellentesque congue leo velit, non porta dui euismod nec.<br> <br> mauris sed enim risus. quisque mollis justo quis commodo euismod. nullam non massa in lorem cursus sagittis. sed laoreet felis mauris, a eleifend sapien molestie eget. duis at volutpat elit. phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. phasellus venenatis ultrices justo nec venenatis.',
            'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                            'src'        : 'material/sample_08.jpg'
        }
    }