var express = require('express')
var app = express()

var oldPaths = [
  '2013/04/15/What-Is-The-Future-Of-Open-Government',
  '2013/05/06/Fixing-Procurement-1-Fix-Registration',
  '2013/05/07/Fixing-Procurement-2-Up-The-API-Game',
  '2013/05/08/Fixing-Procurement-3-Make-Purchasing-Faster',
  '2013/05/09/Fixing-Procurement-4-Change-Contracting-Officer-Culture',
  '2013/05/09/The-Most-Interesting-Part-Of-The-New-Open-Data-Policy',
  '2013/05/13/Fixing-Procurement-5-Its-Not-About-Procurement',
  '2013/05/14/Fixing-Procurement-6-Use-Agile-Policymaking',
  '2013/05/15/The-Results-Are-In',
  '2013/05/16/Fixing-Procurement-7-Standard-Terms-Of-Service',
  '2013/05/29/an-open-government-story',
  '2013/06/24/bringing-procurement-reform-to-every-city-in-america',
  '2013/07/01/thanks-to-measured-voice',
  '2013/07/21/screendoor-new-feature-custom-rating-fields',
  '2013/07/25/announcing-adopta-saas-ifying-government-software',
  '2013/07/31/making-bootstrap-accessible',
  '2013/08/07/made-bootstrap-accessible',
  '2013/08/28/recommendations-to-improve-large-it-procurements',
  '2013/09/03/welcome-aboard-sid',
  '2013/09/04/showing-adopta-some-love',
  '2013/09/06/weekend-reading',
  '2013/10/07/the-healthcare-gov-fiasco',
  '2013/10/10/how-healthcare-gov-went-wrong',
  '2013/10/21/how-to-fix-healthcare-gov',
  '2013/10/28/when-government-gets-tech-right-part-i',
  '2013/11/05/announcing-quick-consults',
  '2013/12/06/so-you-want-to-fix-procurement',
  '2014/01/08/dont-blame-the-client',
  '2014/01/22/Fix-The-Lockout-First',
  '2014/01/27/Reform-Federal-Procurement-for-Information-Technology-Act',
  '2014/01/28/team-management-with-hubot',
  '2014/02/10/screendoor-messages-and-more',
  '2014/02/11/welcome-al3x',
  '2014/02/21/Announcing-OpenRFPs',
  '2014/02/24/openrfps-day-one',
  '2014/03/05/screendoor-tables-and-multi-page-forms',
  '2014/03/12/Welcome-18F',
  '2014/05/05/new-service-status-page',
  '2014/05/12/Bureaucrat-First',
  '2014/05/30/openrfps-on-national-day-of-civic-hacking',
  '2014/06/30/creating-an-unbelievable-citizen-experience-part-1',
  '2014/07/07/creating-an-unbelievable-citizen-experience-part-2',
  '2014/07/15/creating-an-unbelievable-citizen-experience-part-3',
  '2014/08/15/building-the-dobt-support-team',
  '2014/09/08/welcome-josh-rubenoff',
  '2014/09/15/welcome-josh-goldstein',
  '2014/09/23/making-government-more-effective-and-inclusive',
  '2014/10/01/knowledge-base',
  '2014/11/20/announcing-payments-for-screendoor',
  '2014/12/08/free-trials-no-longer-expire',
  '2014/12/12/screendoor-feature-updates',
  '2014/12/29/dobts-year-in-review',
  '2015/01/13/managing-design-remotely',
  '2015/02/23/welcome-kari',
  '2015/02/24/culture-of-no',
  '2015/02/24/screendoor-roi-for-government',
  '2015/03/02/preview-project-templates',
  '2015/03/30/screendoor-activity-feed',
  '2015/04/01/beforeunload-js',
  '2015/04/07/public-records-requests',
  '2015/04/15/project-teams',
  '2015/04/17/streamlining-the-production-of-open-data',
  '2015/05/05/right-time-for-procurement-pilot',
  '2015/05/11/demo-screendoor-for-hiring-and-fellowships',
  '2015/05/13/fix-your-forms',
  '2015/05/15/defeating-the-culture-of-no',
  '2015/05/26/demo-screendoor-for-fellowships',
  '2015/05/29/goodbye-formscentral-hello-screendoor',
  '2015/06/23/project-management',
  '2015/06/26/three-more-form-design-tips',
  '2015/06/30/brainstorming',
  '2015/07/07/whats-new-for-screendoor-project-reviewers',
  '2015/07/14/style-guide',
  '2015/08/11/find-your-next-hire-webinar',
  '2015/09/03/introducing-forms-fm',
  '2015/09/09/designing-forms-fm',
  '2015/09/17/dont-fear-meetings',
  '2015/09/18/crowdsourcing-the-news',
  '2015/09/21/aging-infrastructure',
  '2015/09/28/dobt-at-code-for-america-summit',
  '2015/10/13/the-data-revolution-has-a-software-problem',
  '2015/10/19/new-client-guide',
  '2015/11/19/shortcuts-for-workflow-automation',
  '2015/12/03/screendoor-for-journalists',
  '2016/01/07/bright-future-of-digital-government-services',
  '2016/01/11/building-a-nomination-form-with-screendoor',
  '2016/02/03/cpnn-propublica-screendoor-community-call',
  '2016/03/31/scheduling-appointments-with-screendoor',
  '2016/04/04/a-whole-slew-of-screendoor-updates',
  '2016/04/12/new-confirm-field-type',
  '2016/05/02/screendoor-trash',
  '2016/05/12/interview-justin-erlich',
  '2016/05/12/introducing-our-podcast-rewiring-government',
  '2016/05/16/dobt-joins-500-startups',
  '2016/05/26/interview-rachel-lunsford',
  '2016/07/13/designing-a-better-authentication-system',
  '2016/07/13/welcome-becca-moore',
  '2016/08/03/interview-alex-howard',
  'author/adam',
  'author/aviv',
  'author/clay',
  'author/jg',
  'author/josh',
  'author/kari',
  'author/sid',
  '',
  'page10',
  'page11',
  'page12',
  'page13',
  'page14',
  'page15',
  'page16',
  'page17',
  'page18',
  'page19',
  'page2',
  'page20',
  'page3',
  'page4',
  'page5',
  'page6',
  'page7',
  'page8',
  'page9',
  'tags/accessibility',
  'tags/adopta',
  'tags/design',
  'tags/engineering',
  'tags/events',
  'tags/govtech',
  'tags/integrations',
  'tags/international-development',
  'tags/journalism',
  'tags/open-data',
  'tags/podcast',
  'tags/procurement',
  'tags/rfp-ez',
  'tags/screendoor',
  'tags/updates',
  'tags/working-remotely'
]

app.get('*', function (req, res) {
  for (i in oldPaths) {
    if (
      (req.path.toLowerCase() == ("/" + oldPaths[i]).toLowerCase()) ||
      (req.path.toLowerCase() == ("/" + oldPaths[i] + "/").toLowerCase()) ||
      (req.path.toLowerCase() == ("/" + oldPaths[i] + "/index.html").toLowerCase())
    ) {

      newPath = oldPaths[i].
                  // The new blog paths no longer contain the date
                  replace(/[0-9]{4}\/[0-9]{2}\/[0-9]{2}/, '').
                  // Strip index.html
                  replace(/\.index.html$/, '').
                  toLowerCase()

      // Add a trailing slash
      if (!newPath.match(/\/$/)) {
        newPath = newPath + '/'
      }

      // Add a leading slash
      if (!newPath.match(/^\//)) {
        newPath = '/' + newPath
      }

      console.log("Redirecting " + req.path + ' to ' + newPath);
      res.redirect(301, "https://www.dobt.co/blog" + newPath)
      return
    }
  }

  res.status(404).send('not found')
})

app.listen(process.env.PORT || 3000)
