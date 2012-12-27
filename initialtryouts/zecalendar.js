YUI.add('zecalendar', function (Y, NAME) {
    Y.ZeCalendar = Y.Base.create('calendar', Y.Calendar, [Y.WidgetPosition, Y.WidgetPositionAlign, Y.WidgetPositionConstrain])
}, '1.0.0', {"requires": ["calendar", "widget-position", "widget-position-align", "widget-position-constrain"]})