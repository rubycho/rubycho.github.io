let IconLink = {
    props: ['url', 'icon'],
    computed: {
        iconClass() {
            return [this.icon, "large", "icon"];
        }
    },
    template: 
        '<a :href="url"> \
            <i :class="iconClass"></i> \
        </a>'
};

let MSection = {
    props: ['title'],
    template:
        '<section> \
            <h2>{{title}}</h2> \
            <slot></slot> \
        </section>'
};

let EducationArticle = {
    props: ['school', 'dep', 'dep-url', 'detail', 'gpa', 'mgpa'],
    template: 
        '<article> \
            <h3>{{school}}</h3> \
            <ul> \
                <li> \
                    <a :href="depUrl">{{dep}}</a>, \
                    {{detail}} \
                </li> \
                <li>GPA: {{gpa}}</li> \
                <li v-if="mgpa">Major-Calculated GPA: {{mgpa}}</li> \
            </ul> \
        </article>'
};

let LangArticle = {
    props: ['lang', 'names', 'scores', 'exam-dates'],
    computed: {
        items() {
            let names = this.names.split(", ");
            let scores = this.scores.split(", ");
            let examDates = this.examDates.split(", ");

            let _items = [];
            for (let i=0; i < names.length; i++) {
                _items.push({
                    name: names[i],
                    score: scores[i],
                    examDate: examDates[i]
                })
            }
            return _items;
        }
    },
    template:
        '<article> \
            <h3>{{lang}}</h3> \
            <ul> \
                <li v-for="item in items">{{item.name}} {{item.score}} (exam date: {{item.examDate}})</li> \
            </ul> \
        </article>'
};

let GeneralArticle = {
    props: ['name', 'date-detail', 'html-detail'],
    template: 
        '<article> \
            <h3>{{name}}</h3> \
            <ul> \
                <li>{{dateDetail}}</li> \
                <li v-html="htmlDetail"></li> \
            </ul> \
        </article>'
};

new Vue({
    el: '#app',
    components: {
        'icon-link': IconLink,
        'm-section': MSection,
        'education-article': EducationArticle,
        'lang-article': LangArticle,
        'general-article': GeneralArticle
    }
});

Vue.nextTick(function() {
    let links = document.getElementsByTagName('a');
    for (link of links) link.setAttribute('target', 'blank');
});
